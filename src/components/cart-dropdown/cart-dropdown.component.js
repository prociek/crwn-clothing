import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/selector/cart";
import { toggleHiddenCart } from "../../store/actions/cart";

import {
  CartDropdownContainer,
  CartItems,
  Button
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} {...item} />)
      ) : (
        <span className="message">No items in cart!</span>
      )}
    </CartItems>
    <Button
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleHiddenCart());
      }}
    >
      Go to Checkout
    </Button>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
