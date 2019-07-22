import React from 'react'
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Cronograma } from 'chronos-core';

interface CronogramaCardProps {
    cronograma: Cronograma,
    setOnDetail: () => void
}

export function CronogramaCard(props: CronogramaCardProps) {

    const { disciplinas, uuid, descricao, titulo, inicio } = props.cronograma
    return (
        <Card fluid
            as={Link}
            to={`cronogramas/${uuid}`}
            onClick={props.setOnDetail}
            color='black'>
            <Card.Content>
                <Card.Header>{titulo}</Card.Header>
                <Card.Meta>{descricao}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='book' />
                {disciplinas.length} Disciplinas
            <Card.Content description={`Você iniciou esse cronograma em ${inicio}`} />
            </Card.Content>
        </Card>
    )
}