import * as actionTypes from "../actionTypes";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return {
    type: actionTypes.FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccess = collections => {
  return {
    type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
    collections
  };
};

export const fetchCollectionsFailure = errorMessage => {
  return {
    type: actionTypes.FETCH_COLLECTIONS_FAILURE,
    errorMessage
  };
};

export const fetchCollectionsAsync = () => dispatch => {
  dispatch(fetchCollectionsStart());
  const collectionRef = firestore.collection("collections");
  collectionRef
    .get()
    .then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionMap));
    })
    .catch(err => {
      console.err(err);
      dispatch(fetchCollectionsFailure(err.message));
    });
};
