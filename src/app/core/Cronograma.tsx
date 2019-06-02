import React from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Cronograma({ match }: any) {
    const id = match.params.id;
    console.log(id);

    return (
        <>
            <Button as={Link}
                to={`../cronogramas`}
            >
                Home Cronogramas
            </Button>
            <h3>Hi from Cronograma Detail</h3>
        </>
    )
}

export default Cronograma
