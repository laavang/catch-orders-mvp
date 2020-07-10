import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeLicense, addLicense } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        licenses: state.licenses
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        removeLicense: (index) => dispatch(removeLicense(index)),
        addLicense: (index) => dispatch(addLicense(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)