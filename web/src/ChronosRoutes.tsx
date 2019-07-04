import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import CronogramaList from './app/pages/Main';
import Login from './app/pages/Login';
import { Provider } from 'react-redux';
import { configureStore } from 'chronos-core';
import IndexHome from './app/home/IndexHome';
import SignInContainer from './app/containers/login/SignInContainer';

const ChronosRoutes = () => {
    return (
        <Provider store={configureStore()}>
            <BrowserRouter>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL}/`} exact component={IndexHome} />
                    <Route path={`${process.env.PUBLIC_URL}/cronogramas`} component={CronogramaList} />
                    <Route path={`${process.env.PUBLIC_URL}/entrar`} component={SignInContainer} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default ChronosRoutes;