import { connect } from 'react-redux'
import AddLicense from '../components/AddLicense'
import { addLicense } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addLicense: (license) => dispatch(addLicense(license))
    }
}

export default connect(null, mapDispatchToProps)(AddLicense)
