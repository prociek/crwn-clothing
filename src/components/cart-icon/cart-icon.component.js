import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleHiddenCart } from "../../store/actions";

const CartIcon = ({ onToggleHiddenCart }) => (
  <div className="cart-icon" onClick={onToggleHiddenCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    onToggleHiddenCart: () => dispatch(toggleHiddenCart())
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
