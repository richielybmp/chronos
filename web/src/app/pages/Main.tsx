import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from '../shared/components/nav/MainNav';
import Cronograma from './Cronograma';
import CronogramaList from '../containers/CronogramaListContainer';
import NewCronogramaForm from './forms/NewCronogramaForm';

const Main = ({ match }: any) => {
    return (
        <>
            <Header />
            <div style={{ marginTop: '7em' }}>
                {/* <SidebarExampleTransitions> */}
                <Switch>
                    <Route path={`${match.url}`} exact component={CronogramaList} />
                    <Route path={`${match.url}/novo-cronograma`} exact component={NewCronogramaForm} />
                    <Route path={`${match.url}/:id`} component={Cronograma} />
                    {/* </SidebarExampleTransitions> */}
                </Switch>
            </div>
        </>
    )
};

export default Main
