import React from 'react'
import { Route, Switch } from 'react-router-dom';
import CronogramaList from '../containers/CronogramaListContainer';
import CronogramaContainer from '../containers/CronogramaContainer';
import NewDisciplinaForm from './forms/NewDisciplinaForm';
import { MainNav } from '../shared/components';

const Main = ({ match }: any) => {
    return (
        <MainNav>
            <Switch>
                <Route path={`${match.url}`} exact component={CronogramaList} />
                <Route path={`${match.url}/:id/nova-disciplina`} component={NewDisciplinaForm} />
                <Route path={`${match.url}/:id`} component={CronogramaContainer} />
            </Switch>
        </MainNav>
    )
}

export default Main