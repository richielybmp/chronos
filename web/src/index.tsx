import React from 'react'
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from "core";
// import createIndexRoutes from './routes';
import CronogramaList from './app/pages/Main';
import * as serviceWorker from './serviceWorker';
import Login from './app/pages/Login';
import App from './App';
import './index.css';

// const routes = createIndexRoutes()

const ConnectedApp = (
    <Provider store={configureStore()}>
        <BrowserRouter>
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/`} exact component={App} />
                <Route path={`${process.env.PUBLIC_URL}/cronogramas`} component={CronogramaList} />
                <Route path={`${process.env.PUBLIC_URL}/entrar`} component={Login} />
            </Switch>
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(ConnectedApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
