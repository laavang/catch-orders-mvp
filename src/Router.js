import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Dashboard from './containers/Dashboard'
import LogIn from './components/LogIn'
import cookie from 'cookie'


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
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
            <Route path="/login" component={LogIn} />
            <ProtectedRoute exact path="/" component={Dashboard} />
        </Switch>
    );
};

export default Router;


