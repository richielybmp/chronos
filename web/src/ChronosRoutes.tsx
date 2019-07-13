import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import CronogramaList from './app/pages/Main';
import IndexHome from './app/home/IndexHome';
import SignInContainer from './app/containers/login/SignInContainer';
import Unauthorized from './app/pages/httpStatus/Unauthorized';
import SignUpContainer from './app/containers/login/SignUpContainer';
import { Provider } from 'react-redux';
import { configureStore } from 'chronos-core';

const ChronosRoutes = () => {
    return (
        <Provider store={configureStore() as any}>
            <BrowserRouter>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL}/`} exact component={IndexHome} />
                    <Route path={`${process.env.PUBLIC_URL}/cronogramas`} component={CronogramaList} />
                    <Route path={`${process.env.PUBLIC_URL}/entrar`} component={SignInContainer} />
                    <Route path={`${process.env.PUBLIC_URL}/cadastrar`} component={SignUpContainer} />
                    <Route path={`${process.env.PUBLIC_URL}/unauthorized`} component={Unauthorized} />
                </Switch>
            </BrowserRouter>
        </Provider>

    )
};

export default ChronosRoutes;