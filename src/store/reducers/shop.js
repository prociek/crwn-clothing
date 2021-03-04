import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COLLECTIONS:
      return {
        ...state,
        collections: action.collections
      };
    default:
      return state;
  }
};

export default shopReducer;
