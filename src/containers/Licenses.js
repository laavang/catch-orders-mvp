import { connect } from 'react-redux'
import Licenses from '../components/Licenses'
import { removeLicense } from '../redux/actions'
import { fetchLicenses } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        licenses: state.licenses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLicenses: () => dispatch(fetchLicenses()), 
        removeLicense: (index) => dispatch(removeLicense(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Licenses)
