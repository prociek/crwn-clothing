import { takeLatest, call, put } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "../actions/shop";

export function* fetchCollectionsAsyncSaga() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (err) {
    console.err(err);
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollections() {
  yield takeLatest(
    actionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsyncSaga
  );
}