import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
// import { deleteLicense } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        licenses: state.licenses,
        licenseFilter: state.licenseFilter
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        // removeLicense: (index) => dispatch(removeLicense(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)