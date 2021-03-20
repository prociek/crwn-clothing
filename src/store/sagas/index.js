import { all, call } from "redux-saga/effects";

import { fetchCollections } from "./shop";
import {
  onGoogleSignIn,
  onEmailSignIn,
  onCheckUserSession,
  onSignOut
} from "./user";

export default function* rootSaga() {
  yield all([
    call(fetchCollections),
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onCheckUserSession),
    call(onSignOut)
  ]);
}
