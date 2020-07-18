import React from 'react'
import {
    Container,
    Table,
    TableBody,
    th,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import CachedIcon from '@material-ui/icons/Cached';
import EditIcon from '@material-ui/icons/Edit';

const Licenses = (props) => {

    // Unprocessed Licenses
    const licenses = props.licenses.filter(license => license.isOpen === true);

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
                {licenses.map((license, idx) => (
                    <tr key={license.id}>
                        <th scope="col">{license["flaghousePO"]}</th>
                        <th scope="col">{license["buyer"]}</th>
                        <th scope="col">{license["site"]}</th>
                        <th scope="col">{license["license"]}</th>
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

export default Licenses