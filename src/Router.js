import React from 'react'
import { Switch, Route } from 'react-router'
import Dashboard from './containers/Dashboard'
import LogIn from './components/LogIn'


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={LogIn} />
        </Switch>
    );
};

export default Router;