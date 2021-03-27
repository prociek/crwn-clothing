import { all, call } from "redux-saga/effects";

import { shopSaga } from "./shop";
import { userSaga } from "./user";

import { cartSaga } from "./cart";

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSaga), call(cartSaga)]);
}
