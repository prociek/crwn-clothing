import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../containers/collection-overview/collection-overview.container";
import CollectionPage from "../../containers/collection/collection.container";
import { fetchCollectionsStart } from "../../store/actions/shop";

const ShopPage = ({ match, onFetchCollectionsStart }) => {
  useEffect(() => {
    onFetchCollectionsStart();
  }, []);
  return (
    <React.Fragment>
      <Route exact path={match.path} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
