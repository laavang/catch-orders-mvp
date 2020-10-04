import { connect } from 'react-redux'
import Licenses from '../components/Licenses'
import { deleteLicense, fetchLicenses, updateLicense, processLicense } from '../redux/actions'


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
        updateLicense: (licenseData) => dispatch(updateLicense(licenseData)),
        processLicense: (license) => dispatch(processLicense(license))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Licenses)
