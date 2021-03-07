import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "../../containers/collection-overview/collection-overview.container";
import CollectionPage from "../../containers/collection/collection.container";

import { fetchCollectionsAsync } from "../../store/actions";
import { selectLoading } from "../../store/selector/shop";

const ShopPage = ({ match, onFetchCollectionsAsync, loading }) => {
  useEffect(() => {
    onFetchCollectionsAsync();
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
    onFetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
