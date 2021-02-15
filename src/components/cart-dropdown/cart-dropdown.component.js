import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} {...item} />)
      ) : (
        <span>No items in cart!</span>
      )}
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems
  };
};

export default connect(mapStateToProps)(CartDropdown);
