

export const removeLicense = (index) => {
    return {
        type: 'REMOVE_LICENSE',
        value: index
    }
}

export const addLicense = (license) => {
    return {
        type: 'ADD_LICENSE',
        value: license
    }
}

