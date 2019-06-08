import React from 'react'
import { Route } from 'react-router-dom';
import Header from '../shared/components/header/MainHeader';
import Cronograma from './Cronograma';
import CronogramaList from './CronogramaList';
import NewCronogramaForm from './NewCronogramaForm';

const Main = ({ match }: any) => {
    return (
        <>
            <Header />
            <div style={{ marginTop: '7em' }}>
                {/* <SidebarExampleTransitions> */}
                <Route path={`${match.url}`} exact component={CronogramaList} />
                <Route path={`${match.url}/:id`} exact component={Cronograma} />
                <Route path={`${match.url}/novo-cronograma`} exact component={NewCronogramaForm} />
                {/* </SidebarExampleTransitions> */}
            </div>
        </>
    )
};

export default Main
