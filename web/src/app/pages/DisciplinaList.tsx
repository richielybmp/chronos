import React from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function DisciplinasList({ match }: any) {
    const id = match.params.id;

    return (
        <>
            <Button as={Link}
                to={`../cronogramas`}
            >
                Home Cronogramas
            </Button>
            <h3>DisciplinasList</h3>
        </>
    )
}

export default DisciplinasList
