import React, { useState } from 'react'
import { ReactNodeLike } from 'prop-types';
import { Container, Header, Segment, Grid, Button, Icon } from 'semantic-ui-react';
import { Assunto } from 'chronos-core';
import { ModalContainer } from '..';
import NewArtefatoFormContainer from '../../../containers/NewArtefatoFormContainer';

interface AssuntoContentProps {
    children: ReactNodeLike,
    assunto: Assunto,
    editAssunto: (descricao: string) => void,
}

export function AssuntoContent({ children, assunto, editAssunto }: AssuntoContentProps) {
    const [novoArtefato, setNovoArtefato] = useState(false)

    const [editName, setEditName] = useState(assunto.descricao);
    const [editMode, setEditMode] = useState(false);

    const handleClose = () => {
        setNovoArtefato(false)
    }

    const handleEditMode = () => {
        setEditName(assunto.descricao)
        setEditMode(!editMode)
    }

    return (
        <Container style={{ padding: '2em 0em' }}>
            <Header as='h1' dividing>
                {!editMode ?
                    <Header.Content>
                        {assunto.descricao}
                        <a onClick={() => handleEditMode()}>
                            <Icon name='edit' style={{ marginLeft: '10px' }} />
                        </a>
                    </Header.Content>
                    :
                    <Header.Content>
                        <input value={editName} onChange={(e) => setEditName(e.target.value)}></input>

                        <a onClick={() => handleEditMode()}>
                            <Icon name='cancel' style={{ marginLeft: '10px' }} />
                        </a>

                        <a onClick={() => editAssunto(editName)}>
                            <Icon name='save' style={{ marginLeft: '10px' }} />
                        </a>
                    </Header.Content>
                }
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