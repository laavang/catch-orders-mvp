import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Dashboard from './containers/Dashboard'
// import Login from './containers/Login'
import LoginButton from './components/LoginButton'
import cookie from 'cookie'

// const checkAuth = () => {
//     // const cookies = cookie.parse(document.cookie)
//     // return cookies["isLoggedIn"] ? true : false
//     const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
//     return new Date().getTime() < expiresAt;
// }
// const ProtectedRoute = ({component: Component, ...rest}) => {
//     return (
//         <Route
//         {...rest}
//         render={(props) => checkAuth()
//             ? <Component {...props} />
//             : <Redirect to="/login" />}
//         />
//     )
// }

const Router = () => {
    return (
            <Switch>
                <Route path="/login" component={LoginButton} />
                {/* <ProtectedRoute path="/" component={Dashboard} /> */}
                <Route path="/" component={Dashboard} />
            </Switch>
    )
}

export default Router