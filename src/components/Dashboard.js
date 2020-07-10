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
import AddCar from '../containers/AddCar'
 
const Dashboard = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
                <AddCar carTotal={props.cars.length} />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Flaghouse PO</TableCell>
                        <TableCell>Buyer</TableCell>
                        <TableCell>Site</TableCell>
                        <TableCell>License</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.cars.map((car, idx) => (
                    <TableRow key={car.id}>
                        <TableCell>{car["flaghousePO"]}</TableCell>
                        <TableCell>{car["buyer"]}</TableCell>
                        <TableCell>{car["site"]}</TableCell>
                        <TableCell>{car["license"]}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                // add onClick method here
                                onClick={() => props.removeCar(idx)}
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