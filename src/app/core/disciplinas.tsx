import React from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Disciplinas({ match }: any) {
    const id = match.params.id;
    console.log(id);

    return (
        <>
            <Button as={Link}
                to={`../cronogramas`}
            >
                Home Cronogramas
            </Button>
            <h3>Hi from Disciplinas</h3>
        </>
    )
}

export default Disciplinas
