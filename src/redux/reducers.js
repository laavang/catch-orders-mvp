import { combineReducers } from 'redux'

const licenses = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LICENSE':
            return [ ...state, action.value ]
        case 'REMOVE_LICENSE':
            const licenses = [ ...state ]
            licenses.splice(action.value, 1)
            return licenses
        default:
            return state
    }
}

const user = (state = { username: null, password: null, isLoggedIn: false }, action) => {
    switch (action.type) {
        case 'LOG_IN':
            const newUser = action.value;
            console.log("New user: ", newUser);
            return newUser;
        case 'LOG_OUT':
            const emptyUser = { username: null, password: null, isLoggedIn: false };
            document.cookie = 'isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            return emptyUser;
        default:
            return state
    }
}

const licenseFilter = (state = {licenseFilter : "open"}, action) => {
    switch(action.type) {
        case 'FILTER_LICENSES':
            return action.value
        default:
            return state
    }
}

export default combineReducers({ user, licenses, licenseFilter })