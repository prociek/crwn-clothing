import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";

import {
  selectCartItems,
  selectCartItemsTotal
} from "../../store/selector/cart";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ total, cartItems }) => {
  return (
    <section className="checkout-page">
      <header className="checkout-header">
        <li className="header-block">Product</li>
        <li className="header-block">Description</li>
        <li className="header-block">Quantity</li>
        <li className="header-block">Price</li>
        <li className="header-block">Remove</li>
      </header>
      <ul className="item-container">
        {cartItems.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </ul>
      <footer className="total">TOTAL: ${total}</footer>
      <div className="test-warning">
        *Please use the following test credit card for payments* <br /> 4242
        4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
