import * as actionTypes from "../actionTypes";

export const signInSuccess = user => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    user
  };
};

export const signInFailure = errorMessage => {
  return {
    type: actionTypes.SIGN_IN_FAILURE,
    errorMessage
  };
};

export const googleSignInStart = () => {
  return {
    type: actionTypes.GOOGLE_SIGN_IN_START
  };
};

export const emailSignInStart = () => {
  return {
    type: actionTypes.EMAIL_SIGN_IN_START
  };
};
