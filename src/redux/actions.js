
export const addLicense = (license) => {
    return {
        type: 'ADD_LICENSE',
        value: license
    }
}

export const removeLicense = (index) => {
    return {
        type: 'REMOVE_LICENSE',
        value: index
    }
}


export const logIn = (user) => {
    return {
        type: 'LOG_IN',
        value: user
    }
}

export const logOut = () => {
    return {
        type: 'LOG_OUT',
        value: ""
    }
}


