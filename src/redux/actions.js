
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

export const updateLicense = (license) => {
    return (dispatch) => {
        fetch("http://localhost:4000/licenses/"+license.license_id, license)
            .then(res => res.json())
            .then(licenses => {
                const action = {
                    type: 'UPDATE_LICENSE',
                    value: license
                }
                dispatch(action)
            }).catch(e => {
                console.log('error ===> ', e);
            });
    }
}

export const filterLicenses = (licenseFilter) => {
    return {
        type: 'FILTER_LICENSES',
        value: licenseFilter
    }
}

export const fetchLicenses = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/licenses')
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_LICENSES',
                    value: response
                }
                dispatch(action)
            }).catch(e => {
                console.log('error ===> ', e);
            });
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




