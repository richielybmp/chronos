import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './app/home/home';
import App from './App';

const createIndexRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/cronograma" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default createIndexRoutes;