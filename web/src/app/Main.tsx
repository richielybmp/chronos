import React from 'react'
import MainNavContainer from './containers/MainNavContainer';
import { Switch, Route } from 'react-router';
import CronogramaListContainer from './containers/CronogramaListContainer';
import CronogramaContainer from './containers/CronogramaContainer';
import AssuntoContainer from './containers/AssuntoContainer';
import ProfileContainer from './containers/ProfileContainer';
import { SubHeader } from './shared/components';
import RelatoriosContainer from './containers/RelatoriosContainer';

const Main = ({ match }: any) => {
    return (
        <MainNavContainer>
            <Switch>
                <Route path={`${match.url}`} exact component={CronogramaListContainer} />
                <Route path={`${match.url}/profile`} component={ProfileContainer} />
                <Route path={`${match.url}/relatorios`} component={RelatoriosContainer} />
                <Route path={`${match.url}/:id`} exact component={CronogramaContainer} />
                <Route path={`${match.url}/:id/assunto/:id`} component={AssuntoContainer} />
            </Switch>
        </MainNavContainer>
    )
}

const pageTeste = () => {
    return (
        <SubHeader content="Nova página" />
    )
}

export default Main