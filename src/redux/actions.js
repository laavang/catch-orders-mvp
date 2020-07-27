
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


const FETCH_LICENSES_BEGIN = 'FETCH_LICENSES_BEGIN'
const FETCH_LICENSES_SUCCESS = 'FETCH_LICENSES_SUCCESS'
const FETCH_LICENSES_FAILURE = 'FETCH_LICENSES_FAILURE'

export const fetchLicensesBegin = () => {
    return {
    type: FETCH_LICENSES_BEGIN
  }}
  
  export const fetchLicensesSuccess = (licenses) => {
    return {
    type: FETCH_LICENSES_SUCCESS,
    value: licenses 
  }}
  
  export const fetchLicensesFailure = (error) => {
    return {
    type: FETCH_LICENSES_FAILURE,
    value: error 
  }}

export const fetchLicenses = () => {
    return (dispatch) => {
        dispatch(fetchLicensesBegin)
        fetch('http://localhost:4000/licenses')
            .then(res => res.json())
            .then(response => {
                const licenses = response;
                dispatch(fetchLicensesSuccess(licenses))
            }).catch(e => {
                dispatch(fetchLicensesFailure(e))
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
            // window.location.reload();
    }
}



export const updateLicense = (license) => {
    return (dispatch) => {
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
        const url = "http://localhost:4000/licenses/" + license.license_id;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedLicense)
        })
            .catch(e => {
                console.log('error ===> ', e);
            });
            // window.location.reload();
            //eventually replace this
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
        // .then(res => {
        //     res.json()
        // })
        // })
        .catch(e => {
            console.log('error ===> ', e);
        });
        // window.location.reload();
        //eventually replace this
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




