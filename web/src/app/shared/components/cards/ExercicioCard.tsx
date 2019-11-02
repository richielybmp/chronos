import React from 'react';
import { Artefato, Exercicio } from 'chronos-core';
import { Card, Icon, Progress } from 'semantic-ui-react';
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
                <Card.Meta>{artefato.descricao}</Card.Meta>
                <Card.Meta>{Utils.formatDateString(artefato.data)}</Card.Meta>
            </Card.Content>
            <Card.Content
                style={{ marginRight: '0', cursor: 'pointer' }}
                onClick={() => actionEdit(artefato.uuid, 2)}
            >
                <Icon
                    name='edit'
                />
                Editar
            </Card.Content>
        </Card>
    )
}