import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  CollectionTitle,
  PreviewContainer
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history }) => (
  <CollectionPreviewContainer>
    <CollectionTitle
      onClick={() => history.push(`/shop/${title.toLowerCase()}`)}
    >
      {title}
    </CollectionTitle>
    <PreviewContainer>
      {items
        .filter((_, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
