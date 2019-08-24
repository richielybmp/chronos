import React from 'react'
import { Header, Segment } from 'semantic-ui-react';
import { ExpansibleButtons } from '..';

interface Props {
    actionNewMaterial: () => void
    , actionNewExercicio: () => void
    , actionNewRevisao: () => void
}

export function EmptyArtefatosHeader(props: Props) {
    return (
        <>
            <Header as='h2' textAlign='center'>
                Crie itens para acompanhar seus estudos
            <Header.Subheader>Você pode escolher entre Revisões, Materiais de Estudo ou Lista de Exercícios</Header.Subheader>
                <br />

            </Header>
            <Segment basic>
                <ExpansibleButtons
                    actionNewMaterial={props.actionNewMaterial}
                    actionNewExercicio={props.actionNewExercicio}
                    actionNewRevisao={props.actionNewRevisao}
                />
            </Segment>
        </>
    );
}