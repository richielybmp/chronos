import React, {useState} from 'react'
import { Card } from 'semantic-ui-react';
import DisciplinaCard from '../shared/components/cards/DisciplinaCard';
import cronogramas from '../utils/mock-disciplinas'

function CronogramaList() {

    const [listaDeCronogramas, setListaDeCronogramas] = useState(cronogramas);

    return (
        <>
            <Card.Group>
                {listaDeCronogramas.map((item, index) => {
                    return (
                        <DisciplinaCard key={index} disciplina={item} />
                    )
                })}
            </Card.Group>

        </>
    )
}

export default CronogramaList
