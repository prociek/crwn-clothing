import { takeLatest, call, put, all } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import { clearCart } from "../actions/cart";

export function* clearCartSaga() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(actionTypes.SIGN_OUT_SUCCESS, clearCartSaga);
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
