import { takeLatest, call, put } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
} from "../actions/user";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
  isUserAuthenticated
} from "../../firebase/firebase.utils";

function* createUserProfileUtil(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
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
