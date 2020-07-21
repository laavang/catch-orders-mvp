import { connect } from 'react-redux'
import EditLicense from '../components/UpdateLicense'
import { updateLicense } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        updateLicense: (licenseData) => dispatch(updateLicense(licenseData))
    }
}
 
export default connect(null, mapDispatchToProps)(UpdateLicense)
