import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import cookie from 'cookie'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["isLoggedIn"] ? true : false
}
const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}

const Router = () => {
    return (
            <Switch>
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/" component={Dashboard} />
                {/* <Route path="/" component={Dashboard} /> */}
            </Switch>
    )
}

export default Router