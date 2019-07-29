import React, { useState } from 'react'
import { ReactNodeLike } from 'prop-types';
import { Container, Header, Segment, Grid, Button } from 'semantic-ui-react';
import { Assunto } from 'chronos-core';
import NewDisciplinaFormContainer from '../../../containers/NewDisciplinaFormContainer';
import { ModalContainer } from '..';

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
                    {assunto.descricao.toUpperCase()}
                    <Header.Subheader>
                    </Header.Subheader>
                </Header.Content>
            </Header>
            {/* {assunto.disciplinas.length > 0 &&
                <Segment basic>
                    <Grid columns={1}>
                        <Grid.Column mobile={16} tablet={6} computer={3} floated='right'>
                            <Button fluid onClick={() => setnovaDisciplina(true)}
                                color='green' content='Disicplina' icon='plus' size='tiny'
                                labelPosition='right' />
                        </Grid.Column>
                    </Grid>
                </Segment>
            } */}

            {novoArtefato ?
                showArtefatpForm("novoartefato", handleClose) : null
            }

            {children}
        </Container>
    )
}

function showArtefatpForm(idOnDetail: string, handleClose: () => void) {
    if (idOnDetail == "novoartefato") {
        return (
            <ModalContainer show={true} toggle={handleClose}>
                {/* <NewDisciplinaFormContainer close={handleClose} idOnDetail="" /> */}
            </ModalContainer>
        )
    }
}