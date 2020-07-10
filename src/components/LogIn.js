import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

class Login extends Component {

    render() {
        return (
            <div class="login-form">
                <div><PersonIcon className="login-icon"/><Input placeholder="Username" name="username-input" id="username-input" style={{ width: '85%' }}></Input></div>
                <div><VpnKeyIcon className="login-icon"/><Input placeholder="Password" type="password" name="password-input" id="password-input" style={{ width: '85%' }}></Input></div>
                <div className="login-button-wrapper"><Button className="login-button" onClick={this.props.login}>Login</Button></div>
            </div>
        )
    }
}

export default Login