import React from "react";
import { connect } from "react-redux";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../store/selector/shop";

const CollectionPage = ({ collection: { items, title } }) => {
  return (
    <section className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  };
};

export default connect(mapStateToProps)(CollectionPage);
