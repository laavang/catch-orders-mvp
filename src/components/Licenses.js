import React, { useState, useEffect } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import CachedIcon from '@material-ui/icons/Cached';
import EditIcon from '@material-ui/icons/Edit';


const Licenses = (props) => {

    // const [licenses, setLicenses] = useState([]);

    useEffect(() => {
        props.fetchLicenses();
    }, []);

    console.log(props.licenses)

    if (props.licenses.length === 0) {
        console.log('No license found.')
        return <div></div>
    }

    else {

        console.log('Licenses found: ', props.licenses)

        let openLicenses = props.licenses.filter(license => license.isClosed === 0);

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
                    {openLicenses.map((license, idx) => (
                        <tr key={license.license_id}>
                            <th scope="col">{license.flaghousePO}</th>
                            <th scope="col">{license.buyer}</th>
                            <th scope="col">{license.site}</th>
                            <th scope="col">{license.license}</th>
                            <th scope="col" style={{ textAlign: "center" }}>
                                <EditIcon
                                    className="icon" />
                            </th>
                            <th scope="col" style={{ textAlign: "center" }}>
                                <DeleteIcon
                                    onClick={() => props.removeLicense(idx)}
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