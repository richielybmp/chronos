import React from 'react'
import { Route } from 'react-router-dom';
import Header from '../shared/components/header/Header';
import Disciplinas from '../core/Disciplinas';
import Main from '../core/Main';
import Cronograma from '../core/Cronograma';

const Home = ({ match }: any) => { //assume main component.
    return (
        <>
            <Header />
            <div style={{ marginTop: '7em', }}>
                <Route path={`${match.url}`} exact component={Main} ></Route>
                <Route path={`${match.url}/:id`} exact component={Cronograma}></Route>
                <Route path={`${match.url}/disciplinas`} exact component={Disciplinas}></Route>
            </div>
        </>
    )
};

export default Home
