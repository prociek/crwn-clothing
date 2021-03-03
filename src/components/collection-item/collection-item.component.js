import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../store/actions";

import {
  CollectionItemContainer,
  CollectionImage,
  CollectionFooter,
  ItemName,
  ItemPrice,
  Button
} from "./collection-item.styles";

const CollectionItem = ({ item, dispatch }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <CollectionImage imageUrl={imageUrl} />
      <CollectionFooter>
        <ItemName>{name}</ItemName>
        <ItemPrice>{price}€</ItemPrice>
      </CollectionFooter>
      <Button onClick={() => dispatch(addItem(item))} inverted>
        Add To Cart
      </Button>
    </CollectionItemContainer>
  );
};

export default connect()(CollectionItem);
