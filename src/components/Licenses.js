import React, { useState, useEffect } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import CachedIcon from '@material-ui/icons/Cached';
import UpdateLicense from './UpdateLicense'


const Licenses = (props) => {

    // const [fetchingStatus, reportFetchingStatus] = useState(false);
    const [updateCount, addUpdate] = useState(0);

    const triggerLicenseUpdate = () => {

        addUpdate(updateCount + 1)
    }

    useEffect(() => {
        // reportFetchingStatus(fetchingStatus => !fetchingStatus)
        props.fetchLicenses();
    }, []);

    
    if (props.licenses.length === 0) {
        console.log('No license found.')
        return <div></div>
    }

    else {
        
        console.log('Licenses found: ', props.licenses)

        let undeletedLicenses = props.licenses.filter(license => license.isDeleted === 0);
        let openLicenses = undeletedLicenses.filter(license => license.isClosed === 0);

        return (
            <table class="table table-striped table-bordered open-licenses-table">
                <thead>
                    <tr>
                        <th scope="col">Flaghouse PO</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Site</th>
                        <th scope="col">License</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Process</th>
                    </tr>
                </thead>
                <tbody>
                    {openLicenses.map((license, index) => (
                        <tr key={license.license_id}>
                            <th scope="col">{license.flaghousePO}</th>
                            <th scope="col">{license.buyer}</th>
                            <th scope="col">{license.site}</th>
                            <th scope="col">{license.license}</th>
                            <th scope="col" style={{ textAlign: "center" }}>
                                <UpdateLicense license={license} index={index} updateLicense={props.updateLicense} fetchLicenses={props.fetchLicenses} triggerLicenseUpdate={triggerLicenseUpdate}/>
                            </th>
                            <th scope="col" style={{ textAlign: "center" }}>
                                <DeleteIcon
                                    onClick={() => props.deleteLicense(license)}
                                    className="icon text-red" />
                            </th>
                            <th scope="col" style={{ textAlign: "center" }}>
                                <CachedIcon className="icon process-icon" />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Licenses