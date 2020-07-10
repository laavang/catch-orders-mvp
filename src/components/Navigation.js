import React from 'react'
import {
    AppBar, Toolbar,
    Typography
} from '@material-ui/core'
import logo from '../logo.svg';

const Navigation = () => {
    return (
        <AppBar position="relative" className="app-bar">
            <Toolbar>
                <div className="logo">
                    <img src={logo} />
                </div>
                <Typography variant="h6" style={{ flexGrow: "1" }} className="toolbar-header">
                    Orders
                </Typography>
                <ul className="nav-list">
                <li className="nav-list-item"
                        onClick={() => {
                            console.log("User logged out")
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                        }}>
                        Logout
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation