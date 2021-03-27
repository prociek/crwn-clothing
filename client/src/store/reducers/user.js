import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.user
      };
    case actionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null
      };
    case actionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.error,
        currentUser: null
      };
    default:
      return state;
  }
};

export default userReducer;
