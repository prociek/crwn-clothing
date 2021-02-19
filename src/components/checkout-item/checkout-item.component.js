import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

import { removeItem, addItem, decreaseItem } from "../../store/actions";

const CheckoutItem = ({ item, onRemoveItem, onAddItem, onDecreaseItem }) => {
  const { id, name, imageUrl, quantity, price } = item;
  return (
    <li className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div onClick={() => onDecreaseItem(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => onAddItem(item)} className="arrow">
          &#10095;
        </div>
      </div>
      <div className="price">${price}</div>
      <div onClick={() => onRemoveItem(id)} className="remove-button">
        &#10007;
      </div>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveItem: id => dispatch(removeItem(id)),
    onAddItem: item => dispatch(addItem(item)),
    onDecreaseItem: item => dispatch(decreaseItem(item))
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
