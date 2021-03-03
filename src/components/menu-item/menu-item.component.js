import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  Image,
  Content,
  Title,
  Subtitle
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.path}${linkUrl}`)}
  >
    <Image imageUrl={imageUrl} />
    <Content>
      <Title>{title.toUpperCase()}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </Content>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
