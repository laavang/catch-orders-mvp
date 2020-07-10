import React from 'react'
import {
    AppBar, Toolbar, IconButton,
    Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';

const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <div className="logo">
                    <img src={logo} />
                </div>
                <Typography variant="h6" style={{ flexGrow: "1" }} className="toolbar-header">
                    Orders
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/login">Log Out</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation