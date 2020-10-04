
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
    }
}

export const fetchLicensesSuccess = (licenses) => {
    return {
        type: FETCH_LICENSES_SUCCESS,
        value: licenses
    }
}

export const fetchLicensesFailure = (error) => {
    return {
        type: FETCH_LICENSES_FAILURE,
        value: error
    }
}


export const fetchLicenses = () => {
    return (dispatch) => {
        dispatch(fetchLicensesBegin)
        fetch('http://localhost:4000/licenses')
            .then(res => res.json())
            .then(response => {
                const licenses = response;

                for (let i = 0; i < licenses.length; i++) {
                    let startDateTime = licenses[i].licenseStart;
                    let endDateTime = licenses[i].licenseEnd;

                    let startMonth = startDateTime.slice(5, 7);
                    let startDay = startDateTime.slice(8, 10);
                    let startYear = startDateTime.slice(0, 4);
                    let licenseStart = `${startMonth}-${startDay}-${startYear}`;

                    let endMonth = endDateTime.slice(5, 7);
                    let endDay = endDateTime.slice(8, 10);
                    let endYear = endDateTime.slice(0, 4);
                    let licenseEnd = `${endMonth}-${endDay}-${endYear}`;

                    licenses[i].licenseStart = licenseStart;
                    licenses[i].licenseEnd = licenseEnd;
                }

                dispatch(fetchLicensesSuccess(licenses))
                
            }).catch(e => {
                dispatch(fetchLicensesFailure(e))
                console.log('error ===> ', e);
            });
    }
}



const PROCESS_LICENSE_BEGIN = 'PROCESS_LICENSE_BEGIN'
const PROCESS_LICENSE_SUCCESS = 'PROCESS_LICENSE_SUCCESS'
const PROCESS_LICENSE_FAILURE = 'PROCESS_LICENSE_FAILURE'

export const processLicenseBegin = () => {
    return {
        type: PROCESS_LICENSE_BEGIN
    }
}

export const processLicenseSuccess = (license) => {
    return {
        type: PROCESS_LICENSE_SUCCESS,
        value: license
    }
}

export const processLicenseFailure = (error) => {
    return {
        type: PROCESS_LICENSE_FAILURE,
        value: error
    }
}


export const processLicense = (license) => {
    return (dispatch) => {
        console.log("License processing initiating...");
        dispatch(processLicenseBegin)

        let startDateTime = license.licenseStart;
        let endDateTime = license.licenseEnd;

        let startMonth = startDateTime.slice(5, 7);
        let startDay = startDateTime.slice(8, 10);
        let startYear = startDateTime.slice(0, 4);
        let licenseStart = `${startMonth}-${startDay}-${startYear}`;

        let endMonth = endDateTime.slice(5, 7);
        let endDay = endDateTime.slice(8, 10);
        let endYear = endDateTime.slice(0, 4);
        let licenseEnd = `${endMonth}-${endDay}-${endYear}`;

        license.licenseStart = licenseStart;
        license.licenseEnd = licenseEnd;

        console.log("REACT_APP_BACKEND_URI:" + process.env.REACT_APP_BACKEND_URI);

        fetch(`${process.env.REACT_APP_BACKEND_URI}/licenses/process`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(license)
            })
            .then(dispatch(processLicenseSuccess(license)))
            .catch(e => {
                console.log('error ===> ', e);
            });
}}



export const addLicense = (license) => {

    console.log("ADD LICENSE: ", license)

    return (dispatch) => {

        let licenseStartMonth = license.licenseStart.slice(0, 2);
        let licenseStartDay = license.licenseStart.slice(3, 5);
        let licenseStartYear = license.licenseStart.slice(6, 10);

        let licenseEndMonth = license.licenseEnd.slice(0, 2);
        let licenseEndDay = license.licenseEnd.slice(3, 5);
        let licenseEndYear = license.licenseEnd.slice(6, 10);

        let licenseStart = `${licenseStartYear}-${licenseStartMonth}-${licenseStartDay} 00:00:00`
        let licenseEnd = `${licenseEndYear}-${licenseEndMonth}-${licenseEndDay} 00:00:00`

        const newLicense = {
            'flaghousePO': license.flaghousePO,
            'buyer': license.buyer,
            'site': license.site,
            'license': license.license,
            'licenseStart': licenseStart,
            'licenseEnd': licenseEnd,
            'isClosed': 0,
            'isDeleted': 0
        };

        fetch('http://localhost:4000/licenses/add',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newLicense)
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

        // let licenseStartMonth = license.licenseStart.slice(0,2);
        // let licenseStartDay = license.licenseStart.slice(3,5);
        // let licenseStartYear = license.licenseStart.slice(6,10);

        // let licenseEndMonth = license.licenseEnd.slice(0,2);
        // let licenseEndDay = license.licenseEnd.slice(3,5);
        // let licenseEndYear = license.licenseEnd.slice(6,10);

        // let licenseStart = `${licenseStartYear}-${licenseStartMonth}-${licenseStartDay} 00:00:00`
        // let licenseEnd = `${licenseEndYear}-${licenseEndMonth}-${licenseEndDay} 00:00:00`

        const updatedLicense = {
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
        const deletedLicense = {
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




