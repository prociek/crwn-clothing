import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { fetchCollections } from "../../store/actions";

const ShopPage = ({ match, onFetchCollections }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      onFetchCollections(convertCollectionsSnapshotToMap(snapshot));
      setIsLoading(false);
    });
    return () => unsubscribeFromSnapshot();
  }, []);
  return (
    <React.Fragment>
      <Route
        exact
        path={match.path}
        render={props => (
          <CollectionOverview isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => <CollectionPage isLoading={isLoading} {...props} />}
      />
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCollections: collections => dispatch(fetchCollections(collections))
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
