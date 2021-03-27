import React from "react";

import {
  CartItemContainer,
  ItemImg,
  ItemDetails,
  ItemDetail
} from "./cart-item.styles";

const CartItem = ({ name, price, quantity, imageUrl }) => (
  <CartItemContainer>
    <ItemImg src={imageUrl} alt="item" />
    <ItemDetails>
      <ItemDetail>{name}</ItemDetail>
      <ItemDetail>
        {quantity} x ${price}
      </ItemDetail>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
