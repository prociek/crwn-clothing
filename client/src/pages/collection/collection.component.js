import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../store/selector/shop";

import {
  CollectionContainer,
  CollectionTitle,
  CollectionItems
} from "./collection.styles";

const CollectionPage = ({ collection: { items, title } }) => {
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItems>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  };
};

export default connect(mapStateToProps)(CollectionPage);
