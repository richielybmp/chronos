import React, { useContext } from 'react'
import { Container, Grid, Breadcrumb, Button, Dropdown, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ChronosContext } from '../../../../ChronosRoutes';
import { Cronograma } from 'chronos-core';

interface CronogramaSubHeaderProps {
    titulo: string,
    complement: any,
    handlePopModal: () => void,
    deleteAction: () => void
}

export function CronogramaSubHeader(props: CronogramaSubHeaderProps) {

    const { titulo, handlePopModal, deleteAction } = props
    const context = useContext(ChronosContext);

    var cronograma = context.getState().cronogramas != null && context.getState().cronogramas.cronogramaOnDetail.cronograma;

    return (
        <div>
            <Container>
                <Grid columns={props.complement == null ? 2 : 3}>
                    <Grid.Column mobile={14} tablet={10} computer={10}>
                        <Breadcrumb size='large'>
                            <Breadcrumb.Section as={Link} to={'/cronogramas'} link>Cronogramas</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron' />

                            {props.complement != null && props.complement.assunto && cronograma != null ?
                                (
                                    <>
                                        <Breadcrumb.Section
                                            as={Link} to={`/cronogramas/${cronograma.uuid}`}
                                            active>{cronograma.titulo}</Breadcrumb.Section>
                                        <Breadcrumb.Divider icon='right chevron' />
                                        <Breadcrumb.Section active>{props.complement.disciplina.nome}</Breadcrumb.Section>
                                        <Breadcrumb.Divider icon='right chevron' />
                                        <Breadcrumb.Section active>{titulo}</Breadcrumb.Section>
                                    </>
                                )
                                :
                                <Breadcrumb.Section active>{titulo}</Breadcrumb.Section>
                            }
                        </Breadcrumb>
                    </Grid.Column>

                    {/* Botões 'Editar' e 'Excluir' */}

                    {props.complement == null &&
                        <Grid.Column floated='right' tablet={3} computer={3} only='tablet computer'>
                            <Button fluid onClick={() => handlePopModal()}
                                color='blue' floated='right' content='Editar' icon='edit' size='tiny'
                                labelPosition='right' />
                        </Grid.Column>
                    }
                    <Grid.Column floated='right' tablet={3} computer={3} only='tablet computer'>
                        <Button fluid onClick={() => deleteAction()}
                            color='red' floated='right' content='Excluir' icon='trash' size='tiny'
                            labelPosition='right' />
                    </Grid.Column>

                    {/* Mobile */}
                    <Grid.Column mobile={2} only='mobile'>
                        <Dropdown direction='left' icon='caret square down outline'>
                            <Dropdown.Menu>
                                {props.complement == null &&
                                    <Dropdown.Item style={{ backgroundColor: '#2185d0', color: '#fff', margin: '4px' }} onClick={() => handlePopModal()}>
                                        <Icon name='edit' className='floated' />
                                        Editar
                                    </Dropdown.Item>
                                }
                                <Dropdown.Item style={{ backgroundColor: '#db2828', color: '#fff', margin: '4px' }} onClick={() => deleteAction()}>
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
