import React from 'react'
import MainNavContainer from './containers/MainNavContainer';
import { Switch, Route } from 'react-router';
import CronogramaListContainer from './containers/CronogramaListContainer';
import CronogramaContainer from './containers/CronogramaContainer';
import AssuntoContainer from './containers/AssuntoContainer';

const Main = ({ match }: any) => {
    return (
        <MainNavContainer>
            <Switch>
                <Route path={`${match.url}`} exact component={CronogramaListContainer} />
                <Route path={`${match.url}/:id`} exact component={CronogramaContainer} />
                <Route path={`${match.url}/:id/assunto/:id`} component={AssuntoContainer} />
            </Switch>
        </MainNavContainer>
    )
}

const pageTeste = () => {
    return (
        <div>Olá de um componente teste</div>
    )
}

export default Main