import { connect } from 'react-redux'
import Login from '../components/Login'
import { logIn } from '../redux/actions'

    const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.isLoggedIn,
            user: state.user
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            logIn: (user) => dispatch(logIn(user))
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Login)