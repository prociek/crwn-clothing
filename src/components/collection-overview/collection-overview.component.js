import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../store/selector/shop";

const CollectionOverview = ({ collections }) => (
  <section>
    {collections.map(collection => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </section>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
