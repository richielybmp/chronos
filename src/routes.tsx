import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './app/home/Home';
import App from './App';
import LoginForm from './app/core/Login';

const createIndexRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} exact={true} component={App} />
            <Route path={`${process.env.PUBLIC_URL}/cronograma`} component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/entrar`} component={LoginForm} />
        </Switch>
    </BrowserRouter>
);

export default createIndexRoutes;