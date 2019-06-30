import React, { useState } from 'react'
import { Accordion, List, Label, Segment, Grid, Button } from 'semantic-ui-react'
import { Disciplina, Assunto } from 'chronos-core';

interface DisciplinaTabProps {
    disciplinas: Disciplina[],
    matchUrl: any,
}

export function DisciplinaTab(props: DisciplinaTabProps) {

    const { disciplinas } = props

    const [activeItem, setActiveItem] = useState(disciplinas[0].descricao)
    const [activeAssuntos, setActiveAssuntos] = useState(disciplinas[0].assuntos)

    const handleItemClick = (name: string) => {
        activeItem === name ? setActiveItem('') : setActiveItem(name)
        var d = disciplinas.find(x => x.descricao === name)
        if (d)
            setActiveAssuntos(d.assuntos)
    }

    return (
        <div>
            <Accordion fluid styled>
                {
                    disciplinas.map((item: Disciplina, index: number) => {
                        return (
                            < div key={index}>
                                <Accordion.Title
                                    style={{ backgroundColor: 'lightgrey' }}
                                    active={activeItem === item.descricao}
                                    onClick={() => handleItemClick(item.descricao)}>
                                    <Label as='a' color='violet' ribbon size='large'>{item.descricao}</Label>
                                </Accordion.Title>
                                <Accordion.Content active={activeItem === item.descricao}>

                                    <Grid columns={1}>
                                        <Grid.Column mobile={16} tablet={6} computer={3} floated='right'>
                                            <Button fluid onClick={() => alert('Not implemented yet')}
                                                color='green' content='Assunto' icon='plus' size='tiny'
                                                labelPosition='right' />
                                        </Grid.Column>
                                    </Grid>
                                    <List divided relaxed>

                                        {activeAssuntos.map((item: Assunto, idx: number) => {
                                            return (
                                                <List.Item key={idx} >
                                                    <List.Content>
                                                        <List.Header>{item.descricao}</List.Header>
                                                        <List.Description>Revisões: {item.revisoes.length}</List.Description>
                                                        <List.Description>Exercícios: {item.exercicios.length}</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                            )
                                        })}
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