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
import AddCar from '../containers/AddCar'
import Sidebar from './Sidebar'

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <Sidebar />
            <Container maxWidth="lg" className="car-container">
    
                <div class="card">
                        <div class="card-header"><div class="row"><div class="d-flex align-items-center col-6 col-sm-6 col-md-6 col-lg-6"><strong><i class="icon-info pr-1"></i>Open Orders</strong></div><div sx="6" class="d-flex justify-content-end col-sm-6 col-md-6 col-lg-6"><AddCar/></div></div></div>
                        <div class="card-body">
                        <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Flaghouse PO</th>
                                    <th scope="col">Buyer</th>
                                    <th scope="col">Site</th>
                                    <th scope="col">License</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.cars.map((car, idx) => (
                                    <tr key={car.id}>
                                        <th scope="col">{car["flaghousePO"]}</th>
                                        <th scope="col">{car["buyer"]}</th>
                                        <th scope="col">{car["site"]}</th>
                                        <th scope="col">{car["license"]}</th>
                                        <th scope="col" style={{textAlign:"center"}}>
                                            <DeleteIcon
                                                // add onClick method here
                                                onClick={() => props.removeCar(idx)}
                                                className="icon text-red" />
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Dashboard