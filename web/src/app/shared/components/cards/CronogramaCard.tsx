import React from 'react'
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Cronograma } from 'chronos-core';

interface CronogramaCardProps {
    cronograma: Cronograma,
    setOnDetail: () => void
}

export function CronogramaCard(props: CronogramaCardProps) {

    const { disciplinas, codigo, descricao, titulo, dataInicio } = props.cronograma
    return (
        <Card fluid
            as={Link}
            to={`cronogramas/${codigo}`}
            onClick={props.setOnDetail}
            color='black'>
            <Card.Content>
                <Card.Header>{titulo}</Card.Header>
                <Card.Meta>{descricao}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='book' />
                {disciplinas.length} Disciplinas
            <Card.Content description={`Você iniciou esse cronograma em ${dataInicio}`} />
            </Card.Content>
        </Card>
    )
}