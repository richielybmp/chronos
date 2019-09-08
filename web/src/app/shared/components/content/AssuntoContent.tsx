import React, { useState } from 'react'
import { ReactNodeLike } from 'prop-types';
import { Container, Header, Grid, Button, Icon } from 'semantic-ui-react';
import { Assunto } from 'chronos-core';
import './style.css';

interface AssuntoContentProps {
    children: ReactNodeLike,
    assunto: Assunto,
    editAssunto: (descricao: string) => void,
}

export function AssuntoContent({ children, assunto, editAssunto }: AssuntoContentProps) {

    const [editName, setEditName] = useState(assunto.descricao);
    const [editMode, setEditMode] = useState(false);

    const handleEditMode = () => {
        setEditName(assunto.descricao)
        setEditMode(!editMode)
    }

    const handleEditAssunto = () => {
        editAssunto(editName)
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
                        <input className="input-edit-assunto-descricao" value={editName} onChange={(e) => setEditName(e.target.value)}></input>
                        <Grid container columns={2} style={{ marginTop: '-10px', marginBottom: '5px' }}>
                            <Grid.Column computer={3} mobile={8}>
                                <Button fluid onClick={() => handleEditMode()} color='red'>
                                    <Icon name='cancel' style={{ marginLeft: '10px' }} />
                                </Button>
                            </Grid.Column>

                            <Grid.Column computer={3} mobile={8}>
                                <Button fluid onClick={() => handleEditAssunto()} color='green'>
                                    <Icon name='save' style={{ marginLeft: '10px' }} />
                                </Button>
                            </Grid.Column>
                        </Grid>
                    </Header.Content>
                }
            </Header>
            {children}
        </Container>
    )
}