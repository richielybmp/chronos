import React from 'react'
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Cronograma } from 'chronos-core';
import Utils from '../../../utils/utils';

interface CronogramaCardProps {
    cronograma: Cronograma,
    setOnDetail: () => void
}

export function CronogramaCard(props: CronogramaCardProps) {

    const { disciplinas, uuid, descricao, titulo, inicio, fim } = props.cronograma

    let dataInicio = Utils.formatDateString(inicio)
    let dataFim = Utils.formatDateString(fim)

    return (
        <Card fluid
            as={Link}
            to={`cronogramas/${uuid}`}
            onClick={props.setOnDetail}
            color='black'
            className="cronograma_card"
        >
            <Card.Content>
                <Card.Header className="cronograma_card_header" >{titulo}</Card.Header>
                <Card.Meta>{descricao}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='book' />
                {disciplinas.length} Disciplinas
            <Card.Content description={`${dataInicio} - ${dataFim}`} />
            </Card.Content>
        </Card>
    )
}