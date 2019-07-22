import React from 'react'
import { Container, Grid, Breadcrumb, Button, Dropdown, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface CronogramaSubHeaderProps {
    titulo: string,
    handlePopModal: () => void,
    deleteAction: () => void
}

export function CronogramaSubHeader(props: CronogramaSubHeaderProps) {

    const { titulo, handlePopModal, deleteAction } = props

    return (
        <div style={{ backgroundImage: '-webkit-radial-gradient(50% top, circle cover, rgb(15, 180, 164) 0%, rgba(27, 28, 39, 0) 15%), -webkit-radial-gradient(right top, circle cover, #27918c 30%, rgba(121, 74, 162, 0) 100%)' }}>
            <Container>
                <Grid columns={3}>
                    <Grid.Column mobile={14} tablet={10} computer={10}>
                        <Breadcrumb size='large'>
                            <Breadcrumb.Section as={Link} to={'/cronogramas'} link>Cronogramas</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section active>{titulo.toUpperCase()}</Breadcrumb.Section>
                        </Breadcrumb>
                    </Grid.Column>

                    {/* Botões 'Editar' e 'Excluir' */}
                    <Grid.Column floated='right' tablet={3} computer={3} only='tablet computer'>
                        <Button fluid onClick={() => handlePopModal()}
                            color='yellow' floated='right' content='Editar' icon='edit' size='tiny'
                            labelPosition='right' />
                    </Grid.Column>
                    <Grid.Column tablet={3} computer={3} only='tablet computer'>
                        <Button fluid onClick={() => deleteAction()}
                            color='red' floated='right' content='Excluir' icon='trash' size='tiny'
                            labelPosition='right' />
                    </Grid.Column>

                    {/* Mobile */}
                    <Grid.Column mobile={2} only='mobile'>
                        <Dropdown direction='left' icon='caret square down outline'>
                            <Dropdown.Menu>
                                <Dropdown.Item style={{ backgroundColor: '#fbbd08', margin: '4px' }} onClick={() => handlePopModal()}>
                                    <Icon name='edit' className='floated' />
                                    Editar
                                </Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: '#db2828', margin: '4px' }} onClick={() => deleteAction()}>
                                    <Icon name='trash' className=' floated' />
                                    Excluir
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}
