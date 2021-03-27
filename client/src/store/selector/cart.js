import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(selectCart, cart => cart.hidden);

export const selectCartItemsCount = createSelector(selectCartItems, items =>
  items.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0)
);

export const selectCartItemsTotal = createSelector(selectCartItems, items =>
  items.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0)
);
