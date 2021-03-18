import { takeLatest, call, put } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import { signInSuccess, signInFailure } from "../actions/user";
import {
  auth,
  createUserProfileDocument,
  googleProvider
} from "../../firebase/firebase.utils";

export function* googleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const snapShot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapShot.id,
        ...snapShot.data()
      })
    );
  } catch (err) {
    yield put(call(signInFailure(err.message)));
  }
}

export function* googleSignIn() {
  yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync);
}
