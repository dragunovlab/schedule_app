import { connect } from "react-redux"

import App from "../../App"
import { loadItemsActions } from "../../modules/counter/actions"

const mapDispatchToProps = {loadItemsActions}

export default connect(null, mapDispatchToProps)(App)