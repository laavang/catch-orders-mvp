import React, { useState, useEffect } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import CachedIcon from '@material-ui/icons/Cached';
import UpdateLicense from './UpdateLicense'


const Licenses = (props) => {

    const [updateCount, addUpdate] = useState(0);

    const triggerLicenseUpdate = () => {

        addUpdate(updateCount + 1)
    }

    useEffect(() => {
        props.fetchLicenses();
    }, [updateCount]);


    const deleteLicense = (license) => {
        props.deleteLicense(license)
        triggerLicenseUpdate();
    }

    const processLicense = (license) => {
        props.processLicense(license)
        triggerLicenseUpdate();
    }


    if (props.licenses.loading == true) {
        console.log("Loading licenses...")
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    else if (props.licenses.error !== null || props.licenses.items.length === 0) {
        console.log("No licenses found.")
        return (
            <div>
                <p>No licenses found.</p>
            </div>
        )
    }

    else {

        let undeletedLicenses = props.licenses.items.filter(license => license.isDeleted === 0);
        let openLicenses = undeletedLicenses.filter(license => license.isClosed === 0);

        console.log("Fetched licenses: ", openLicenses);

        return (
            <table class="table table-striped table-bordered open-licenses-table">
                <thead>
                    <tr>
                        {/* <th scope="col">Flaghouse PO</th> */}
                        <th scope="col">Buyer</th>
                        <th scope="col">Site</th>
                        <th scope="col">License</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Process</th>
                    </tr>
                </thead>
                <tbody>
                    {openLicenses.map((license, index) => (
                        <tr key={license.licenseId} id={`license-${license.licenseId}`}>
                            {/* <th scope="col">{license.flaghousePO}</th> */}
                            <th scope="col">{license.buyer}</th>
                            <th scope="col">{license.site}</th>
                            <th scope="col">{license.license}</th>
                            <th scope="col">{license.licenseStart.slice(0, 8)}</th>
                            <th scope="col">{license.licenseEnd.slice(0, 8)}</th>
                            <th scope="col" style={{ textAlign: "center" }}>
                                <UpdateLicense license={license} index={index} updateLicense={props.updateLicense} fetchLicenses={props.fetchLicenses} triggerLicenseUpdate={triggerLicenseUpdate} />
                            </th>
                            <th scope="col" style={{ textAlign: "center" }}>
                                <DeleteIcon
                                    onClick={() => deleteLicense(license)}
                                    className="icon text-red" />
                            </th>
                            <th scope="col" style={{ textAlign: "center" }}>
                                <CachedIcon
                                    onClick={() => processLicense(license)}
                                className="icon process-icon" />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Licenses