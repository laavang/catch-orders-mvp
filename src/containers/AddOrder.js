import { connect } from 'react-redux'
import AddOrder from '../components/AddOrder'
import { addCar } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car))
    }
}

export default connect(null, mapDispatchToProps)(AddOrder)
