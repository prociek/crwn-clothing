import * as actionTypes from "../actionTypes";

export const fetchCollections = collections => {
  return {
    type: actionTypes.FETCH_COLLECTIONS,
    collections
  };
};
