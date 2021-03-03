import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartItemsTotal
} from "../../store/selector/cart";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  ItemsContainer,
  Total,
  TestWarning
} from "./checkout.styles";

const CheckoutPage = ({ total, cartItems }) => {
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>
      <ItemsContainer>
        {cartItems.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
      <Total>TOTAL: ${total}</Total>
      <TestWarning>
        *Please use the following test credit card for payments* <br /> 4242
        4242 4242 4242 - Exp: 01/22 - CVV: 123
      </TestWarning>
      <StripeCheckoutButton price={total} />
    </CheckoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
