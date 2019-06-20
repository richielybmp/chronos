import React, { useState } from 'react'
import { Menu, Segment, Icon, List, Button } from 'semantic-ui-react'
import { Disciplina, Assunto } from 'core';
import { Link } from 'react-router-dom';

interface DisciplinaTabProps {
    disciplinas: Disciplina[],
    matchUrl: any,
    // setOnDetail: () => void
}

function DisciplinaTab(props: DisciplinaTabProps) {

    const { disciplinas, matchUrl } = props

    const [activeItem, setActiveItem] = useState(disciplinas[0].descricao)
    const [activeAssuntos, setActiveAssuntos] = useState(disciplinas[0].assuntos)

    const handleItemClick = (name: string) => {
        setActiveItem(name)
        var d = disciplinas.find(x => x.descricao === name)

        if (d)
            setActiveAssuntos(d.assuntos)
    }

    return (
        <div>
            <Menu attached='top' tabular>

                {disciplinas.map((item: Disciplina, index) => {
                    return (
                        <Menu.Item
                            key={index}
                            name={item.descricao}
                            active={activeItem === item.descricao}
                            onClick={() => handleItemClick(item.descricao)} />
                    )
                })}

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='nova-disciplina'
                        active={activeItem === 'nova-disciplina'}
                    >
                        <Button inverted color='green' floated='right' content='Nova disciplina' icon='add' labelPosition='right' as={Link} to={`${matchUrl.url}/nova-disciplina`} />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

            <Segment attached='bottom'>
                <List divided relaxed>
                    {activeAssuntos.map((item: Assunto, index) => {
                        return (
                            <List.Item>
                                <List.Content>
                                    <List.Header>{`Assunto ${item.descricao}`}</List.Header>
                                    {item.codigo}
                                </List.Content>
                            </List.Item>
                        )
                    })}
                </List>
            </Segment>
        </div>
    )
}

export default DisciplinaTab