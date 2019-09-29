import React, { useState, useEffect } from 'react'
import { Accordion, List, Label, Button, Grid, Dropdown } from 'semantic-ui-react'
import { Disciplina, Assunto } from 'chronos-core';
import { EmptyHeader } from '..';
import { Link } from 'react-router-dom';

interface DisciplinaTabProps {
    disciplinas: Disciplina[],
    matchUrl: any,
    handleDeleteDisciplina: (id: string) => void,
    handleUpdateDisciplina: (id: string) => void,
    handleCreateAssunto: (id: string) => void,
    handleAssuntoOnDetail: (idDisciplina: string, idAssunto: string) => void,
    idOnDetail: string,
    disciplinaOnDetail: string,
    handleSetDisciplinaOnDetail: (id: string) => void,
}

export function DisciplinaTab(props: DisciplinaTabProps) {

    const {
        matchUrl,
        disciplinas,
        handleDeleteDisciplina,
        handleUpdateDisciplina,
        handleCreateAssunto,
        idOnDetail,
        handleAssuntoOnDetail,
        handleSetDisciplinaOnDetail,
        disciplinaOnDetail
    } = props

    const hasDisciplinas = disciplinas.length > 0;
    const emEdicao = idOnDetail !== "";

    useEffect(() => {
        var d = disciplinas.find(x => x.nome === disciplinaOnDetail)
        if (d)
            setActiveAssuntos(d.assuntos)
    }, [disciplinaOnDetail])

    const [activeAssuntos, setActiveAssuntos] =
        useState(hasDisciplinas ? disciplinas[0].assuntos : [])

    const handleItemClick = (name: string) => {
        // activeItem === name ? setActiveItem('') : setActiveItem(name)
        disciplinaOnDetail === name ? handleSetDisciplinaOnDetail('') : handleSetDisciplinaOnDetail(name)
        var d = disciplinas.find(x => x.nome === name)
        if (d)
            setActiveAssuntos(d.assuntos)
    }

    return (
        <div style={{ float: 'left', width: '100%' }}>
            <Accordion fluid styled>
                {
                    disciplinas.map((item: Disciplina, index: number) => {
                        return (
                            < div key={index}>
                                <Accordion.Title
                                    style={{ backgroundColor: 'lightgrey' }}
                                    active={disciplinaOnDetail === item.nome}
                                >
                                    <Grid columns={3}>
                                        <Grid.Column mobile={12} tablet={10} computer={10}>
                                            <Label as='div' ribbon
                                                size='large'
                                                style={{ backgroundColor: '#23689c', color: '#fff' }}
                                                onClick={() => handleItemClick(item.nome)}
                                            >
                                                {item.nome}

                                                <Label.Detail style={{ display: 'block' }}>{item.descricao}</Label.Detail>
                                            </Label>
                                        </Grid.Column>

                                        {/* Botões 'Editar' e 'Excluir' */}
                                        <Grid.Column floated='right' tablet={3} computer={3} only='tablet computer'>
                                            <Button.Group floated='right' >
                                                <Button disabled={emEdicao} color='blue' icon='edit' onClick={() => handleUpdateDisciplina(item.uuid)}></Button>
                                                <Button disabled={emEdicao} color='red' icon='trash' onClick={() => handleDeleteDisciplina(item.uuid)}></Button>
                                                <Button disabled={emEdicao} onClick={() => handleCreateAssunto(item.uuid)}
                                                    color='green' content='Assunto' icon='plus' size='tiny'
                                                    labelPosition='right' />
                                            </Button.Group>
                                        </Grid.Column>

                                        {/* Mobile */}
                                        <Grid.Column floated='right' mobile={2} only='mobile'>
                                            {/* <Icon name='ellipsis vertical'></Icon> */}
                                            <Dropdown direction='left' icon='ellipsis vertical'>
                                                <Dropdown.Menu>
                                                    <Dropdown.Header>Ações</Dropdown.Header>
                                                    <Dropdown.Item style={{ backgroundColor: '#2185d0', color: '#fff', margin: '4px' }}
                                                        icon='edit' content='Editar' onClick={() => handleUpdateDisciplina(item.uuid)} />
                                                    <Dropdown.Item style={{ backgroundColor: '#db2828', color: '#fff', margin: '4px' }}
                                                        icon='trash' content='Excluir' onClick={() => handleDeleteDisciplina(item.uuid)} />
                                                    <Dropdown.Item style={{ backgroundColor: '#16ab39', color: '#fff', margin: '4px' }}
                                                        icon='plus' content='Assunto' onClick={() => handleCreateAssunto(item.uuid)} />
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Grid.Column>
                                    </Grid>
                                </Accordion.Title>
                                <Accordion.Content active={disciplinaOnDetail === item.nome} style={{ backgroundColor: '#ececec' }}>
                                    <List divided relaxed selection animated verticalAlign='middle'>
                                        {activeAssuntos.length > 0 ?
                                            activeAssuntos.map((assunto: Assunto, idx: number) => {
                                                return (
                                                    <List.Item
                                                        onClick={() => handleAssuntoOnDetail(item.uuid, assunto.uuid)}
                                                        key={idx}
                                                        as={Link}
                                                        to={`${matchUrl.url}/assunto/${assunto.uuid}`}
                                                    >
                                                        <List.Header>{assunto.descricao}</List.Header>
                                                        <List.Description>Artefatos: {assunto.artefatos.length}</List.Description>
                                                        {/* <List.Description>Exercícios: {assunto.exercicios.length}</List.Description>  */}
                                                    </List.Item>
                                                )
                                            })
                                            :
                                            <EmptyHeader
                                                icon=''
                                                title='Você ainda não possui nenhum Assunto criado'
                                                subtitle='Adicione assuntos!'
                                                btnTitle="Novo assunto"
                                                onClick={() => handleCreateAssunto(item.uuid)}
                                            />
                                        }
                                    </List>
                                </Accordion.Content>
                            </div>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}