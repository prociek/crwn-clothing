import * as actionTypes from "../actionTypes";

export const toggleHiddenCart = () => {
  return {
    type: actionTypes.TOGGLE_HIDDEN_CART
  };
};

export const addItem = item => {
  return {
    type: actionTypes.ADD_ITEM,
    item
  };
};
