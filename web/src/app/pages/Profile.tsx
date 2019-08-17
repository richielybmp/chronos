import React, { useState, useEffect } from 'react'
import { Container, List, Button, Divider, Icon, Message } from 'semantic-ui-react';
import { LoaderComponent, SubHeader } from '../shared/components';
import { Cronograma } from 'chronos-core';
import Utils from '../utils/utils';

interface ProfileProps {
    cronogramaList: Cronograma[],
    authState: any,
    updateUser: (name: string) => void,
    clearUserError: () => void,
    logOut: (callback: Function) => void
}

const Profile = (props: ProfileProps) => {

    const { cronogramaList, authState, updateUser, clearUserError } = props;

    const { error, loading } = authState

    useEffect(() => {
        clearUserError()
    }, [])

    const [editName, setEditName] = useState('');
    const [editMode, setEditMode] = useState(false);

    if (authState.user) {
        const { name, email, created_at } = authState.user.user;

        const handleEditMode = () => {
            setEditName(name)
            setEditMode(!editMode)
        }

        const handleLogOut = () => {
            props.logOut(() => {
                window.location.href = '/'
            })
        }

        const handleUpdateUser = () => {
            updateUser(editName);
            setEditMode(false);
        }

        if (loading) {
            return <LoaderComponent tamanho='big' titulo="Carregando" />
        }

        return (
            <div>
                <SubHeader content="Minha conta" />
                <Container text style={{ marginTop: '70px' }}>
                    <List>
                        <List.Item>
                            <List.Header>Email</List.Header>
                            {email}
                        </List.Item>
                        <List.Item>
                            <List.Header>Nome</List.Header>
                            {!editMode ?
                                <List.Content>
                                    {name}
                                    <a onClick={() => handleEditMode()} rel="noopener noreferrer">
                                        <Icon name='edit' style={{ marginLeft: '10px' }} />
                                    </a>
                                </List.Content>
                                :
                                <List.Content>
                                    <input value={editName} onChange={(e) => setEditName(e.target.value)}></input>

                                    <a onClick={() => handleEditMode()} rel="noopener noreferrer">
                                        <Icon name='cancel' style={{ marginLeft: '10px' }} />
                                    </a>

                                    <a onClick={() => handleUpdateUser()} rel="noopener noreferrer">
                                        <Icon name='save' style={{ marginLeft: '10px' }} />
                                    </a>
                                </List.Content>
                            }
                        </List.Item>
                        <List.Item>
                            <List.Header>Usuário desde</List.Header>
                            {Utils.formatDateString(created_at)}
                        </List.Item>
                        <List.Item>
                            <List.Header>Total de cronogramas</List.Header>
                            {`${cronogramaList.length} cronogramas `}
                        </List.Item>
                    </List>
                    {error &&
                        <Message warning style={{ display: "block" }}>
                            <Icon name='user x' />
                            {error}
                        </Message>
                    }
                    <Divider />
                    <Button color='red' onClick={() => handleLogOut()}>Log off</Button>
                </Container>
            </div>
        )
    }
    else {
        return (null)
    }
}

export default Profile
