import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { selectLoading } from "../../store/selector/shop";
import withSpinner from "../../hocs/with-spinner/with-spinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading
});

export default compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);
