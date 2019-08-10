import React, { useState } from 'react'
import { ReactNodeLike } from 'prop-types';
import { Container, Header, Segment, Grid, Button } from 'semantic-ui-react';
import { Assunto } from 'chronos-core';
import { ModalContainer } from '..';
import NewArtefatoFormContainer from '../../../containers/NewArtefatoFormContainer';

interface AssuntoContentProps {
    children: ReactNodeLike,
    assunto: Assunto,
}

export function AssuntoContent({ children, assunto }: AssuntoContentProps) {
    const [novoArtefato, setNovoArtefato] = useState(false)

    const handleClose = () => {
        setNovoArtefato(false)
    }

    return (
        <Container style={{ padding: '2em 0em' }}>
            <Header as='h1' dividing>
                <Header.Content>
                    {assunto.descricao}
                </Header.Content>
            </Header>
            {/* {assunto.artefatos.length > 0 && */}
            <Segment basic>
                <Grid columns={2}>
                    <Grid.Column mobile={16} tablet={6} computer={3} floated='right'>
                        <Button fluid onClick={() => setNovoArtefato(true)}
                            color='green' content='Artefato' icon='plus' size='tiny'
                            labelPosition='right' />
                    </Grid.Column>
                </Grid>
            </Segment>
            {/* }  */}

            {novoArtefato ?
                showArtefatoForm("novoartefato", handleClose) : null
            }

            {children}
        </Container>
    )
}

function showArtefatoForm(idOnDetail: string, handleClose: () => void) {
    if (idOnDetail == "novoartefato") {
        return (
            <ModalContainer show={true} toggle={handleClose}>
                <NewArtefatoFormContainer close={handleClose} idOnDetail="" />
            </ModalContainer>
        )
    }
}