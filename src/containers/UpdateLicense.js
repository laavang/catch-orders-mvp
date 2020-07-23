import { connect } from 'react-redux'
import UpdateLicense from '../components/UpdateLicense'
import { updateLicense, fetchLicenses } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("made it to container");
    return {
        updateLicense: (license) => dispatch(updateLicense(license)),
        fetchLicenses: () => dispatch(fetchLicenses())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UpdateLicense)
