import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from "../../store/selector/directory";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({ sections: selectSections });

export default connect(mapStateToProps)(Directory);
