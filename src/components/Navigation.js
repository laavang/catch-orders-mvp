import React, { useState } from "react";
import {
    AppBar, Toolbar,
    Typography
} from '@material-ui/core'
import logo from '../logo.svg';
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {

        const [isOpen, setIsOpen] = useState(false);
        const {
          user,
          isAuthenticated,
          loginWithRedirect,
          logout,
        } = useAuth0();
        const toggle = () => setIsOpen(!isOpen);
      
        const logoutWithRedirect = () =>
          logout({
            returnTo: window.location.origin,
          });

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
                            // console.log("User logged out")
                            // document.cookie = "loggedIn="
                            <div id="qsLogoutBtn"
                            onClick={() => logoutWithRedirect()}
                          >
                            Log Out</div>
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