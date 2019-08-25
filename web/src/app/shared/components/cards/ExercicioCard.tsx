import React from 'react';
import { Artefato, Revisao, EnumEscopo, Exercicio } from 'chronos-core';
import { Card, Icon, Label, Divider, Progress } from 'semantic-ui-react';
import Utils from '../../../utils/utils';

interface CardProps {
    actionDelete: (idArtefato: string) => void
    , actionEdit: (id: string, tipo: number) => void
    , artefato: Artefato
}

export function ExercicioCard(props: CardProps) {
    const { actionDelete, artefato, actionEdit } = props;

    const total = (artefato as Exercicio).quantidade;
    const acertos = (artefato as Exercicio).acertos;
    let proporcao = Math.floor(acertos * 100 / total);

    proporcao = Math.floor(Math.random() * 101);

    const color = proporcao <= 50 ? 'red' : proporcao > 50 && proporcao <= 85 ? 'orange' : 'green';

    return (
        <Card color='black'>
            <Card.Content>
                <Icon
                    style={{ float: 'right', marginRight: '0', cursor: 'pointer' }}
                    floated='right'
                    name='x'
                    onClick={() => actionDelete(artefato.uuid)} />
                <br />
                <Card.Content>{`${acertos} exercícios corretos de ${total}`}</Card.Content>
                <Progress percent={proporcao} color={color} progress />
                <Card.Meta>{Utils.formatDateString(artefato.data)}</Card.Meta>
            </Card.Content>
            <Card.Content
                style={{ marginRight: '0', cursor: 'pointer' }}
                onClick={() => actionEdit(artefato.uuid, 1)}
            >
                <Icon
                    name='edit'
                />
                Editar
            </Card.Content>
        </Card>
    )
}