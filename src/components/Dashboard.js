import React from 'react'
import {
    Container
} from '@material-ui/core'
import AddLicense from '../containers/AddLicense'
import Sidebar from '../containers/Sidebar'
import Licenses from '../containers/Licenses'
import LicensesClosed from '../containers/LicensesClosed'

const Dashboard = (props) => {

    return (
        <div className="dashboard">
            <Sidebar />
            <Container maxWidth="lg" className="license-container">

                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="d-flex align-items-center col-6 col-sm-6 col-md-6 col-lg-6" style={{textTransform: "capitalize"}}>
                                <strong><i class="icon-info pr-1"></i>{props.licenseFilter} Orders</strong>
                            </div>
                            {props.licenseFilter === "open" ?
                            <div sx="6" class="d-flex justify-content-end col-sm-6 col-md-6 col-lg-6">
                                <AddLicense className="add-license-button" />
                            </div>
                            :
                            <div></div>
                            }
                        </div>
                    </div>
                    <div class="card-body">
                        {props.licenseFilter === "open" ?
                            <Licenses />
                            :
                            <LicensesClosed />
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Dashboard