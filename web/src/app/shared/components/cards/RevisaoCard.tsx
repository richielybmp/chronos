import React from 'react';
import { Artefato, Revisao, EnumEscopo } from 'chronos-core';
import { Card, Icon } from 'semantic-ui-react';
import Utils from '../../../utils/utils';

interface CardProps {
    actionDelete: (idArtefato: string) => void
    , actionEdit: (id: string, tipo: number) => void
    , artefato: Artefato
}

export function RevisaoCard(props: CardProps) {
    const { actionDelete, artefato, actionEdit } = props;

    let descricaoEscopo = ObtenhaEscopoRevisao((artefato as Revisao).escopo.toString());

    return (
        <Card color='black'>
            <Card.Content>
                <Icon
                    style={{ float: 'right', marginRight: '0', cursor: 'pointer' }}
                    floated='right'
                    name='x'
                    onClick={() => actionDelete(artefato.uuid)} />
                <Card.Header>{descricaoEscopo}</Card.Header>
                <Card.Meta>{Utils.formatDateString(artefato.data)}</Card.Meta>
            </Card.Content>
            <Card.Content
                style={{ marginRight: '0', cursor: 'pointer' }}
                onClick={() => actionEdit(artefato.uuid, 1)}
            >
                <Icon name='edit' />
                Editar
            </Card.Content>
        </Card>
    )
}

function ObtenhaEscopoRevisao(escopo: string) {
    switch (parseInt(escopo)) {
        case EnumEscopo.DIARIA:
            return '24 horas';
        case EnumEscopo.SEMANAL:
            return '7 dias';
        case EnumEscopo.QUINZENAL:
            return '15 dias';
        case EnumEscopo.MENSAL:
            return '30 dias';
        default:
            return '???';
    }
}
