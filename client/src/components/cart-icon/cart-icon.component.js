import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleHiddenCart } from "../../store/actions/cart";
import { selectCartItemsCount } from "../../store/selector/cart";

import {
  CartIconContainer,
  ShoppingIconStyled,
  ItemCount
} from "./cart-icon.styles";

const CartIcon = ({ onToggleHiddenCart, itemCount }) => (
  <CartIconContainer onClick={onToggleHiddenCart}>
    <ShoppingIconStyled />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => {
  return {
    onToggleHiddenCart: () => dispatch(toggleHiddenCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
