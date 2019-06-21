import React from 'react'
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Cronograma } from 'core';

interface CronogramaCardProps {
    cronograma: Cronograma,
    setOnDetail: () => void
}

function CronogramaCard(props: CronogramaCardProps) {

    const { disciplinas, codigo, descricao, dataInicio } = props.cronograma

    return (
        <Card
            fluid
            as={Link}
            to={`cronogramas/${codigo}`}
            onClick={props.setOnDetail}
            color='black'
        >
            <Card.Content>
                <Card.Header content={descricao} />
                <Card.Meta content={disciplinas.length + ' Disciplinas'} />
                <Card.Description content={dataInicio.toDateString()} />
            </Card.Content>
        </Card >
    )
}

export default CronogramaCard
