import { act } from "react-dom/test-utils";
import * as actionTypes from "../actionTypes";

export const signInSuccess = user => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    user
  };
};

export const signInFailure = error => {
  return {
    type: actionTypes.SIGN_IN_FAILURE,
    error
  };
};

export const googleSignInStart = () => {
  return {
    type: actionTypes.GOOGLE_SIGN_IN_START
  };
};

export const emailSignInStart = user => {
  return {
    type: actionTypes.EMAIL_SIGN_IN_START,
    user
  };
};

export const checkUserSession = () => {
  return {
    type: actionTypes.CHECK_USER_SESSION
  };
};

export const signOutStart = () => {
  return {
    type: actionTypes.SIGN_OUT_START
  };
};

export const signOutSuccess = () => {
  return {
    type: actionTypes.SIGN_OUT_SUCCESS
  };
};

export const signOutFailure = error => {
  return {
    type: actionTypes.SIGN_OUT_FAILURE,
    error
  };
};

export const signUpStart = user => {
  return {
    type: actionTypes.SIGN_UP_START,
    user
  };
};

export const signUpFailure = error => {
  return {
    type: actionTypes.SIGN_UP_FAILURE,
    error
  };
};
