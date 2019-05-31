import React from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Main({ match }: any) {
    return (
        <>
            <Button as={Link} to={`${match.url}/disciplinas`}>
                Disciplinas
            </Button>
            <h3>Hi from Main</h3>
        </>
    )
}

export default Main
