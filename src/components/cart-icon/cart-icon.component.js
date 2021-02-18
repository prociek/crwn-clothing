import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleHiddenCart } from "../../store/actions";
import { selectCartItemsCount } from "../../store/selector/cart";

const CartIcon = ({ onToggleHiddenCart, itemCount }) => (
  <div className="cart-icon" onClick={onToggleHiddenCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
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
