import React from 'react';
import { Artefato, Material } from 'chronos-core';
import { Card, Icon } from 'semantic-ui-react';
import Utils from '../../../utils/utils';

interface CardProps {
    actionDelete: (idArtefato: string) => void
    , actionEdit: (id: string, tipo: number) => void
    , artefato: Artefato
}

export function MaterialCard(props: CardProps) {
    const { actionDelete, artefato, actionEdit } = props;

    const minutos = (artefato as Material).minutos;
    const material = ObtenhaTipoDoMaterial((artefato as Material).tipoMaterial);

    return (
        <Card color='black'>
            <Card.Content>
                <Icon
                    style={{ float: 'right', marginRight: '0', cursor: 'pointer' }}
                    floated='right'
                    name='x'
                    onClick={() => actionDelete(artefato.uuid)} />
                <Card.Header>{material}</Card.Header>
                <Card.Meta>{Utils.formatDateString(artefato.data)}</Card.Meta>
            </Card.Content>
            <Card.Content>
                <Card.Description>{`${minutos} minutos`}</Card.Description>
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

function ObtenhaTipoDoMaterial(indicador: number) {
    switch (indicador) {
        case 1:
            return "Vídeo aula";
        case 2:
            return "Livros";
        case 3:
            return "Internet / artigos / post";
        default:
            return "???"
    }
}