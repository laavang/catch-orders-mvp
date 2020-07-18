import { connect } from 'react-redux'
import LicensesClosed from '../components/LicensesClosed'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        licenses: state.licenses,
        licenseFilter: state.licenseFilter
    }
}

export default connect(mapStateToProps)(LicensesClosed)