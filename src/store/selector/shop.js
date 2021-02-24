import { createSelector } from "reselect";

const selectShop = state => state.shop;

const COLLECTION_MAP_ID = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womans: 4,
  mens: 5
};

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(selectShop, shop =>
  Object.keys(shop.collections).map(key => shop.collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    selectCollections,
    collections => collections[collectionUrlParam]
  );
