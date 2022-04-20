import { connect } from "react-redux";

import DayBlock from "../../components/DayBlock";

//Auth Module
import { itemsSelector } from "../../modules/counter/selectors";

const mapStateToProps = (state) => ({
  items: itemsSelector(state),
});

export default connect(mapStateToProps, {})(DayBlock);
//wrapper redux