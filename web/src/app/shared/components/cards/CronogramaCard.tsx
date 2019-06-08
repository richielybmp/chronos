import React from 'react'
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Cronograma } from 'core';

interface CronogramaCardProps {
    cronograma: Cronograma
}

function CronogramaCard(props: CronogramaCardProps) {

    const { disciplinas, codigo, descricao } = props.cronograma

    return (
        <Card
            as={Link}
            to={`cronogramas/${codigo}`}
        >
            <Card.Content>
                <Card.Header content={`${codigo} - ${descricao}`} />
                <Card.Meta content={disciplinas.length + ' disciplinas'} />
                <Card.Description content={descricao} />
            </Card.Content>
        </Card>
    )
}

export default CronogramaCard
