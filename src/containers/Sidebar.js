import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import { filterLicenses } from '../redux/actions'

    const mapStateToProps = (state) => {
        return {
            licenseFilter: state.licenseFilter
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            filterLicenses: (licenseFilter) => dispatch(filterLicenses(licenseFilter))
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)