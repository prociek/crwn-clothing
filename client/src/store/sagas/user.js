import { takeLatest, call, put, all } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure
} from "../actions/user";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
  isUserAuthenticated
} from "../../firebase/firebase.utils";

function* createUserProfileUtil(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const snapShot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapShot.id,
        ...snapShot.data()
      })
    );
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* googleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield createUserProfileUtil(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* emailSignInAsync({ user: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield createUserProfileUtil(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* checkUserSessionAsync() {
  try {
    const user = yield isUserAuthenticated();
    yield createUserProfileUtil(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

export function* signUpAsync({ user: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield createUserProfileUtil(user, { displayName });
  } catch (err) {
    put(signUpFailure(err));
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

export function* onEmailSignIn() {
  yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, emailSignInAsync);
}

export function* onCheckUserSession() {
  yield takeLatest(actionTypes.CHECK_USER_SESSION, checkUserSessionAsync);
}

export function* onSignOut() {
  yield takeLatest(actionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUp() {
  yield takeLatest(actionTypes.SIGN_UP_START, signUpAsync);
}

export function* userSaga() {
  yield all([
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onCheckUserSession),
    call(onSignOut),
    call(onSignUp)
  ]);
}
