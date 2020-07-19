import { connect } from 'react-redux'
import LicensesClosed from '../components/LicensesClosed'
import {fetchLicenses} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        licenses: state.licenses,
        licenseFilter: state.licenseFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLicenses: () => dispatch(fetchLicenses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LicensesClosed)