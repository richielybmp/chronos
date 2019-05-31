import React from 'react'
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import Header from '../shared/components/header/Header';
import Disciplinas from '../core/Disciplinas';
import Main from '../core/Main';

const Home = ({ match }: any) => { //assume main component.
    console.log(match);

    return (
        <>
            <Header />
            <Container text style={{ marginTop: '7em' }}>
                <Route path={`${match.url}`} exact component={Main} ></Route>
                <Route path={`${match.url}/disciplinas`} exact component={Disciplinas}></Route>
            </Container>
        </>
    )
};

export default Home
