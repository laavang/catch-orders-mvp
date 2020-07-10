import { combineReducers } from 'redux'

const user = (state = null) => state

const licenses = (state = [], action) => {
    switch (action.type) {
        case 'DELETE_LICENSE':
            console.log("Action value: " + action.value)
            const licenses = [...state]
            licenses.splice(action.value, 1)
            return licenses
        case 'ADD_LICENSE':
            return [...state, action.value]
        default:
            return state
    }
}

export default combineReducers({ user, licenses })