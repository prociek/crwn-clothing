import * as actionTypes from "../actionTypes";
import { addItemToCart } from "./utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item)
      };
    default:
      return state;
  }
};

export default cartReducer;
