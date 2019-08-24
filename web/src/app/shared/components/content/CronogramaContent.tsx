import React, { useState } from 'react'
import { ReactNodeLike } from 'prop-types';
import { Container, Header, Segment, Grid, Button } from 'semantic-ui-react';
import { Cronograma } from 'chronos-core';
import NewDisciplinaFormContainer from '../../../containers/NewDisciplinaFormContainer';
import { ModalContainer } from '..';
import Utils from '../../../utils/utils';

interface CronogramaContentProps {
    children: ReactNodeLike,
    cronograma: Cronograma,
}

export function CronogramaContent({ children, cronograma }: CronogramaContentProps) {
    const [novaDisciplina, setnovaDisciplina] = useState(false)

    let dataInicio = Utils.formatDateString(cronograma.inicio)
    let dataFim = Utils.formatDateString(cronograma.fim)

    const handleClose = () => {
        setnovaDisciplina(false)
    }

    return (
        <Container style={{ padding: '2em 0em' }}>
            <Header as='h1' dividing>
                <Header.Content>
                    {cronograma.titulo}
                    <Header.Subheader>
                        {dataInicio} - {dataFim}
                    </Header.Subheader>
                </Header.Content>
            </Header>
            {cronograma.disciplinas.length > 0 ?
                <Segment basic>
                    <Grid columns={1}>
                        <Grid.Column mobile={16} tablet={6} computer={3} floated='right'>
                            <Button fluid onClick={() => setnovaDisciplina(true)}
                                color='green' content='Disicplina' icon='plus' size='tiny'
                                labelPosition='right' />
                        </Grid.Column>
                    </Grid>
                </Segment>
                :
                null
            }

            {
                novaDisciplina &&
                showDisciplinaForm("novadisciplina", handleClose)
            }

            {children}
        </Container>
    )
}

function showDisciplinaForm(idOnDetail: string, handleClose: () => void) {
    if (idOnDetail === "novadisciplina") {
        return (
            <ModalContainer show={true} toggle={handleClose}>
                <NewDisciplinaFormContainer close={handleClose} idOnDetail="" />
            </ModalContainer>
        )
    }
}