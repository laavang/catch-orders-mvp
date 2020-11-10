import React, { Component } from 'react'
// import { Redirect } from 'react-router'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isLoggedIn: false
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = (e) => {
    e.preventDefault()
    // set cookie here
    this.state.isLoggedIn = true;
    document.cookie = "isLoggedIn=true;";
    this.props.logIn(this.state)
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary">Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;