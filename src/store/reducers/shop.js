import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  collections: null,
  loading: true,
  errorMessage: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: action.collections
      };
    case actionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};

export default shopReducer;
