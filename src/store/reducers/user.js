import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null
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
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};

export default userReducer;
