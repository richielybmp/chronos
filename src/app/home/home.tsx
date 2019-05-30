import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Header from '../shared/components/header/header';
import Disciplinas from '../core/disciplinas';
import { Button } from 'semantic-ui-react';

function HomeContent({ match }: any) {
    return (
        <>
            <Button as={Link} to={`${match.url}/disciplinas`}>
                Disciplinas
            </Button>
            <h3>Hi from Home Content</h3>
        </>
    )
}

function Home({ match }: any) {
    return (
        <>
            <Header />
            <Switch>
                <Route path={`${match.url}/`} exact={true} component={HomeContent} />
                <Route path={`${match.url}/disciplinas`} exact={true} component={Disciplinas} />
            </Switch>
        </>
    )
}

export default Home
