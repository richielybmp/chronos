import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Disciplinas from '../core/disciplinas';
import Home from './home';

const createIndexRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/disciplinas" component={Disciplinas} />
        </Switch>
    </BrowserRouter>
);

export default createIndexRoutes;