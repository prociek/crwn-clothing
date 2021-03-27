import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { DirectoryContainer } from "./directory.styles";

import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from "../../store/selector/directory";

const Directory = ({ sections }) => (
  <DirectoryContainer className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({ sections: selectSections });

export default connect(mapStateToProps)(Directory);
