import { connect } from 'react-redux'
import Licenses from '../components/Licenses'
import { deleteLicense, fetchLicenses, updateLicense } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        licenses: state.licenses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLicenses: () => dispatch(fetchLicenses()), 
        deleteLicense: (license) => dispatch(deleteLicense(license)), 
        updateLicense: (licenseData) => dispatch(updateLicense(licenseData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Licenses)
