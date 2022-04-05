import { connect } from "react-redux"
import App from "../../App"
import { loadItemsActions } from "../../modules/counter/actions"

const mapDispatchToProps = {loadItemsActions}
const mapStateToProps = () => {

}

export default connect(null, mapDispatchToProps)(App)