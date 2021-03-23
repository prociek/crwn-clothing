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

export const removeItem = id => {
  return {
    type: actionTypes.REMOVE_ITEM,
    id
  };
};

export const decreaseItem = item => {
  return {
    type: actionTypes.DECREASE_ITEM,
    item
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART
  };
};
