import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import CronogramaList from './app/pages/Main';
import Login from './app/pages/Login';

const createIndexRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={App} />
            <Route path={`${process.env.PUBLIC_URL}/cronogramas`} component={CronogramaList} />
            <Route path={`${process.env.PUBLIC_URL}/entrar`} component={Login} />
        </Switch>
    </BrowserRouter>
);

export default createIndexRoutes;