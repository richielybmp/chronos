import React from 'react'
import { Route, Switch } from 'react-router-dom';
import CronogramaList from '../containers/CronogramaListContainer';
import CronogramaContainer from '../containers/CronogramaContainer';
import NewDisciplinaForm from './forms/NewDisciplinaForm';
import MainNavContainer from '../containers/MainNavContainer';

const Main = ({ match }: any) => {
    return (
        <MainNavContainer>
            <Switch>
                <Route path={`${match.url}`} exact component={CronogramaList} />
                <Route path={`${match.url}/:id/nova-disciplina`} component={NewDisciplinaForm} />
                <Route path={`${match.url}/:id`} component={CronogramaContainer} />
            </Switch>
        </MainNavContainer>
    )
}

export default Main