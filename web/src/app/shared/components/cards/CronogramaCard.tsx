import React from 'react'
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Cronograma } from 'chronos-core';

interface CronogramaCardProps {
    cronograma: Cronograma,
    setOnDetail: () => void
}

export function CronogramaCard(props: CronogramaCardProps) {

    const { disciplinas, codigo, descricao, dataInicio } = props.cronograma
    return (
        // <Card
        //     fluid
        //     as={Link}
        //     to={`cronogramas/${codigo}`}
        //     onClick={props.setOnDetail}
        //     color='black'
        // >
        //     <Card.Content>
        //         <Card.Header content={descricao} />
        //         <Card.Description content={disciplinas.length + ' Disciplinas'} />
        //         <Card.Content extra content={dataInicio} />
        //     </Card.Content>
        // </Card >

        <Card fluid
            as={Link}
            to={`cronogramas/${codigo}`}
            onClick={props.setOnDetail}
            color='black'>
            <Card.Content header={descricao} />
            <Card.Content extra>
                <Icon name='book' />
                {disciplinas.length} Disciplinas
            <Card.Content description={`Você iniciou esse cronograma em ${dataInicio}`} />
            </Card.Content>
        </Card>
    )
}