import React from 'react'
import { Card } from 'semantic-ui-react';
import DisciplinaCard from '../shared/components/cards/DisciplinaCard';
import cronogramas from '../utils/mock-disciplinas'

function CronogramaList({ match }: any) {
    return (
        <>
            <Card.Group>
                {cronogramas.map((item, index) => {
                    return (
                        <DisciplinaCard key={index} disciplina={item} />
                    )
                })}
            </Card.Group>

        </>
    )
}

export default CronogramaList
