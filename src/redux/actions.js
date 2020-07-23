
// export const addLicense = (license) => {
//     return {
//         type: 'ADD_LICENSE',
//         value: license
//     }
// }

// export const removeLicense = (id) => {
//     return {
//         type: 'REMOVE_LICENSE',
//         value: id
//     }
// }

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

export const addLicense = (license) => {
    return (dispatch) => {
        fetch('http://localhost:4000/licenses/add',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(license)
        })
            .then(res => res.json())
            .then(response => {
                // const action = {
                //     type: 'CREATE_LICENSE',
                //     value: response
                // }
                // dispatch(action)
                console.log(response)
            })
            .catch(e => {
                console.log('error ===> ', e);
            });
    }
}



export const updateLicense = (license) => {
    return (dispatch) => {
        const index = license.license_id;
        const updatedLicense =  {
            'license_id': license.license_id,
            'flaghousePO': license.flaghousePO,
            'buyer': license.buyer,
            'site': license.site,
            'license': license.license,
            'licenseStart': license.licenseStart,
            'licenseEnd': license.licenseEnd,
            'isClosed': license.isClosed,
            'isDeleted': 0
        };
        const licenseData = [index, updatedLicense];
        const url = "http://localhost:4000/licenses/" + license.license_id;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedLicense)
        })
            .then(res => {
                res.json()
            })
            .then(status => {
                const action = {
                    type: 'UPDATE_LICENSE',
                    value: licenseData
                }
                dispatch(action)
            }).catch(e => {
                console.log('error ===> ', e);
            });
    }
}


export const deleteLicense = (license) => {
    return (dispatch) => {
        const id = license.license_id;
        const deletedLicense =  {
            'license_id': license.license_id,
            'flaghousePO': license.flaghousePO,
            'buyer': license.buyer,
            'site': license.site,
            'license': license.license,
            'licenseStart': '2020-01-10 14:45:12',
            'licenseEnd': '2022-01-10 14:45:12',
            'isClosed': license.isClosed,
            'isDeleted': 1
        };       
        const url = "http://localhost:4000/licenses/delete/" + id;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(deletedLicense)
        })
        .then(res => {
            res.json()
        })
        .then(status => {
            const action = {
                type: 'DELETE_LICENSE',
                value: deletedLicense
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




