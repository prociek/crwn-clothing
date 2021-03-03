import React from "react";
import { connect } from "react-redux";

import { removeItem, addItem, decreaseItem } from "../../store/actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  ItemGroup,
  ItemQuantity,
  ArrowContainer,
  Value,
  RemoveButton
} from "./checkout-item.styles";

const CheckoutItem = ({ item, onRemoveItem, onAddItem, onDecreaseItem }) => {
  const { id, name, imageUrl, quantity, price } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt="item" />
      </ImageContainer>
      <ItemGroup>{name}</ItemGroup>
      <ItemQuantity>
        <ArrowContainer onClick={() => onDecreaseItem(item)}>
          &#10094;
        </ArrowContainer>
        <Value>{quantity}</Value>
        <div onClick={() => onAddItem(item)}>&#10095;</div>
      </ItemQuantity>
      <ItemGroup>${price}</ItemGroup>
      <RemoveButton onClick={() => onRemoveItem(id)}>&#10007;</RemoveButton>
    </CheckoutItemContainer>
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
