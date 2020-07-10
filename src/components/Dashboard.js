import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import AddLicense from './AddLicense'
 
const Dashboard = (props) => {
    return (
        <Container maxWidth="lg" className="license-container">
            <AddLicense licenseTotal = {props.licenses.length}/>
            <Table className="license-table">
                <TableHead>
                    <TableRow className="license-table-header">
                        <TableCell>Order</TableCell>
                        <TableCell>Buyer</TableCell>
                        <TableCell>Organization</TableCell>
                        <TableCell>Group</TableCell>
                        <TableCell>License</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.licenses.map((license, idx) => (
                    <TableRow className="license-table-row" key={license.flaghouseId}>
                        <TableCell>{license["flaghouseId"]}</TableCell>
                        <TableCell>{license["buyerOrginization"]}</TableCell>
                        <TableCell>{license["organization"]}</TableCell>
                        <TableCell>{license["group"]}</TableCell>
                        <TableCell>{license["license"]}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                // add onClick method here
                                onClick={() => props.removeLicense(idx)}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard