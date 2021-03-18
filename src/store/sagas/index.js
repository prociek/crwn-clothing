import { all, call } from "redux-saga/effects";

import { fetchCollections } from "./shop";
import { googleSignIn } from "./user";

export default function* rootSaga() {
  yield all([call(fetchCollections), call(googleSignIn)]);
}
