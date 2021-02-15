export const addItemToCart = (cartItems, itemToAdd) => {
  const foundedItem = cartItems.find(it => it.id === itemToAdd.id);
  if (foundedItem) {
    return cartItems.map(it =>
      it.id === itemToAdd.id ? { ...it, quantity: it.quantity + 1 } : it
    );
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};
