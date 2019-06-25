import React, { useState } from 'react'
import { Accordion, List } from 'semantic-ui-react'
import { Disciplina, Assunto } from 'chronos-core';

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
                                    {item.descricao}
                                </Accordion.Title>
                                <Accordion.Content active={activeItem === item.descricao}>
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

export default DisciplinaTab


    // < Menu attached = 'top' tabular >

    //     {
    //         disciplinas.map((item: Disciplina, index) => {
    //             return (
    //                 <Menu.Item
    //                     key={index}
    //                     name={item.descricao}
    //                     active={activeItem === item.descricao}
    //                     onClick={() => handleItemClick(item.descricao)} />
    //             )
    //         })
    //     }

    //     < Menu.Menu position = 'right' >
    //         <Menu.Item
    //             name='nova-disciplina'
    //             active={activeItem === 'nova-disciplina'}
    //         >
    //             <Button inverted color='green' floated='right' content='Nova disciplina' icon='add' labelPosition='right' as={Link} to={`${matchUrl.url}/nova-disciplina`} />
    //         </Menu.Item>
    //             </Menu.Menu >
    //         </Menu >