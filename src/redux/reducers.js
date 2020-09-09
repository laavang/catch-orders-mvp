import { combineReducers } from 'redux'

const licenses = (state = { items: [], loading: false, error: null, filter: "open" }, action) => {
    switch (action.type) {
        case 'ADD_LICENSE':
            return {
                ...state,
                items: [...state.licenses.items, action.value],
            }
        case 'DELETE_LICENSE':
            // const licenses = [ ...state ]
            // licenses.splice(action.value, 1)
            // return licenses
            return state
       case 'FETCH_LICENSES_BEGIN':
            return {
                ...state,
                items: [...state.licenses.items],
                loading: true,
                error: null,
            }
        case 'FETCH_LICENSES_SUCCESS':
            return {
                ...state,
                items: action.value,
                loading: false,
                error: null,
            }
        case 'PROCESS_LICENSE_BEGIN':
             return {
                ...state,
                items: [...state.licenses.items],
                loading: true,
                 error: null,
            }
        case 'PROCESS_LICENSE_SUCCESS':
            return {
                 ...state,
                 items: action.value,
                loading: false,
                 error: null,
              }
        case 'FILTER_LICENSES':
            return {
                ...state, 
                filter: action.value
            }
        case 'FILTER_LICENSES':
            return {
                ...state, 
                filter: action.value
            }
        // case 'FETCH_LICENSES_FAILURE':
        //     return {
        //         items: [],
        //         loading: false,
        //         error: action.value
        //     }
        case 'UPDATE_LICENSE':
            // console.log(action.value);
            // const licenseArray = [ ...state ]
            // const updatedLicenseIndex = action.value[0]
            // const updatedLicense = action.value[1]
            // licenseArray.splice(updatedLicenseIndex, 1)
            // licenseArray.splice(updatedLicenseIndex, 0, updatedLicense)
            return state
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



export default combineReducers({ user, licenses })