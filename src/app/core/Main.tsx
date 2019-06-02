import React from 'react'
import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DisciplinaCard from '../shared/components/cards/DisciplinaCard';

const items = [
    {
        path: "cronogramas/1",
        header: 'Cronograma A',
        descricao: 'Enem 2019',
        meta: '7 Disciplinas',
    },
    {
        path: "cronogramas/2",
        header: 'Cronograma B',
        descricao: 'Concurso Público',
        meta: '5 Disciplinas',
    },
]

function Main({ match }: any) {
    return (
        <>
            <Button as={Link} to={`${match.url}/disciplinas`}>
                Disciplinas
            </Button>

            <Card.Group>
                {items.map((item, index) => {
                    return (
                        <DisciplinaCard key={index} disciplina={item} />
                    )
                })}
            </Card.Group>

        </>
    )
}

export default Main
