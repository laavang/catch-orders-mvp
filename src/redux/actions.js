
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
        fetch(`${process.env.REACT_APP_BACKEND_URI}/licenses`)
            .then(res => res.json())
            .then(response => {
                const licenses = response;

                licenses.sort(function(a, b) {
                    return a.licenseId - b.licenseId;
                  });

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

        const thinkificBundles = [
            {
                "id": 550225,
                "name": "[Item #01] CATCH Early Childhood Coordination Kit"
            },
            {
                "id": 550228,
                "name": "[Item #02] CATCH Early Childhood Curriculum & Teacher's Manual"
            },
            {
                "id": 550229,
                "name": "[Item #03] CATCH.org Early Childhood Activity Pack"
            },
            {
                "id": 550230,
                "name": "[Item #04] CATCH Coordination Kit (K-5) 6-Week & 9-Week"
            },
            {
                "id": 550232,
                "name": "[Item #05] CATCH Coordination Kit (K-5) 6-Week"
            },
            {
                "id": 550233,
                "name": "[Item #06] CATCH Coordination Kit (K-5) 9-Week"
            },
            {
                "id": 550234,
                "name": "[Item #07] CATCH K-5 Curriculum Bundle"
            },
            {
                "id": 550235,
                "name": "[Item #08] CATCH PE Guidebook & K-5 Physical Activity Pack"
            },
            {
                "id": 963044,
                "name": "[Item #09] CATCH Coordination Kit (6-8)"
            },
            {
                "id": 963045,
                "name": "[Item #10] CATCH 6-8 Curriculum Bundle"
            },
            {
                "id": 963046,
                "name": "[Item #11] CATCH 6-8 PE Guidebook & Physical Activity Pack"
            },
            {
                "id": 963047,
                "name": "[Item #12] CATCH My Breath E-Cigarette & JUUL Prevention"
            },
            {
                "id": 963049,
                "name": "[Item #13] CATCH Kids Club After School Curriculum Grades K-5"
            },
            {
                "id": 963050,
                "name": "[Item #14] CATCH Kids Club After School Curriculum Grades 5-8"
            },
            {
                "id": 963051,
                "name": "[Item #15] CATCH Kids Club K-5 Physical Activity Pack"
            },
            {
                "id": 963053,
                "name": "[Item #16] CATCH Kids Club 5-8 Physical Activity Pack"
            }];

        let courseId;

        for (let i=0; i<thinkificBundles.length; i++) {
            if (license.license === thinkificBundles[i].name) {
                courseId = thinkificBundles[i].id;
            }
        }

        const licenseToProcess = {
            'flaghousePO': license.flaghousePO,
            'buyer': license.buyer,
            'site': license.site,
            'license': license.license,
            'courseId': courseId,
            'licenseStart': license.licenseStart,
            'licenseEnd': license.licenseEnd,
            'isClosed': 0,
            'isDeleted': 0,
            'licenseId': license.licenseId
        };

        console.log(license);
        console.log("License to process ", licenseToProcess);

        fetch(`${process.env.REACT_APP_BACKEND_URI}/licenses/process`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(licenseToProcess)
            })
            .then(dispatch(processLicenseSuccess(license)))
            .catch(e => {
                console.log('License processing error ===> ', e);
            });
            setTimeout(function(){
                window.location.reload(1);
             }, 1500);
}
}



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

        fetch(`${process.env.REACT_APP_BACKEND_URI}/licenses/add`,
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
            setTimeout(function(){
                window.location.reload(1);
             }, 1500);
    }
}



export const updateLicense = (license) => {
    return (dispatch) => {


        console.log(`License to update: ${license}`);
        const updatedLicense = {
            'licenseId': license.licenseId,
            'flaghousePO': license.flaghousePO,
            'buyer': license.buyer,
            'site': license.site,
            'license': license.license,
            'licenseStart': license.licenseStart,
            'licenseEnd': license.licenseEnd,
            'isClosed': license.isClosed,
            'isDeleted': 0
        };
        const url = `${process.env.REACT_APP_BACKEND_URI}/licenses/${updatedLicense.licenseId}`;
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
            setTimeout(function(){
                window.location.reload(1);
             }, 1500);
    }
}


export const deleteLicense = (license) => {
    return (dispatch) => {
        const id = license.licenseId;
        const deletedLicense = {
            'licenseId': license.licenseId,
            'flaghousePO': license.flaghousePO,
            'buyer': license.buyer,
            'site': license.site,
            'license': license.license,
            'licenseStart': '2020-01-10 14:45:12',
            'licenseEnd': '2022-01-10 14:45:12',
            'isClosed': license.isClosed,
            'isDeleted': 1
        };
        const url = `${process.env.REACT_APP_BACKEND_URI}/licenses/${deletedLicense.licenseId}`;
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
            setTimeout(function(){
                window.location.reload(1);
             }, 1500);
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




