import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from '../shared/components/nav/MainNav';
import CronogramaList from '../containers/CronogramaListContainer';
import CronogramaContainer from '../containers/CronogramaContainer';
import NewDisciplinaForm from './forms/NewDisciplinaForm';

const Main = ({ match }: any) => {
    return (
        <>
            <Header />
            <div style={{ marginTop: '7em' }}>
                {/* <SidebarExampleTransitions> */}
                <Switch>
                    <Route path={`${match.url}`} exact component={CronogramaList} />
                    {/* <Route path={`${match.url}/novo-cronograma`} exact component={NewCronogramaFormContainer} /> */}
                    <Route path={`${match.url}/:id/nova-disciplina`} component={NewDisciplinaForm} />
                    <Route path={`${match.url}/:id`} component={CronogramaContainer} />
                    {/* </SidebarExampleTransitions> */}
                </Switch>
            </div>
        </>
    )
};

export default Main
