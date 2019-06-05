import React from 'react'
import { Route } from 'react-router-dom';
import Header from '../shared/components/header/MainHeader';
import Cronograma from './Cronograma';
import CronogramaList from './CronogramaList';

const Main = ({ match }: any) => {
    return (
        <>
            <Header />

            <div style={{ marginTop: '7em' }}>
                <Route path={`${match.url}`} exact component={CronogramaList} />
                <Route path={`${match.url}/:id`} exact component={Cronograma} />
            </div>
        </>
    )
};

export default Main
