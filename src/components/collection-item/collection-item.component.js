import React from "react";
import { connect } from "react-redux";

import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../store/actions";

const CollectionItem = ({ item, dispatch }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}€</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default connect()(CollectionItem);
