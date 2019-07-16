import React from 'react'
import { Route, Switch } from 'react-router-dom';
import CronogramaContainer from './containers/CronogramaContainer';
import MainNavContainer from './containers/MainNavContainer';
import CronogramaListContainer from './containers/CronogramaListContainer';
import NewDisciplinaFormContainer from './containers/NewDisciplinaFormContainer';

const Main = ({ match }: any) => {
    return (
        <MainNavContainer>
            <Switch>
                <Route path={`${match.url}`} exact component={CronogramaListContainer} />
                <Route path={`${match.url}/:id/nova-disciplina`} exact component={NewDisciplinaFormContainer} />
                <Route path={`${match.url}/:id`} component={CronogramaContainer} />
            </Switch>
        </MainNavContainer>
    )
}

export default Main