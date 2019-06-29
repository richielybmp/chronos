import React, { useState } from 'react'
import { Button, Header, Label, Segment, Icon, Grid, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';
import { CronogramaState } from 'chronos-core';
import DisciplinaListContainer from '../containers/DisciplinaListContainer';
import ModalNovoCronograma from './modal/ModalNovoCronograma';
import { LoaderComponent } from '../shared/components';

interface Props {
    match: any,
    history: any,
    cronogramaOnDetail: CronogramaState,
}

const CronogramaDetail = (props: Props) => {

    const { cronograma, loading } = props.cronogramaOnDetail

    const [modalShowToggle, setmodalShowToggle] = useState(false)

    const handlePopModal = () => {
        setmodalShowToggle(!modalShowToggle)
    }

    const handleCloseModal = () => {
        setmodalShowToggle(false)
    }

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    return (
        <div style={{ padding: '1em 1em' }}>
            {cronograma != null ? (
                <>
                    {/* Botão voltar */}
                    <Grid columns={4}>
                        <Grid.Column mobile={16} tablet={6} computer={3}>
                            <Button fluid inverted color='blue' content='Cronogramas' icon='left arrow'
                                labelPosition='left' as={Link} to={`../cronogramas`} />
                        </Grid.Column>
                    </Grid>
                    {/* Botões 'Editar' e 'Excluir' */}
                    <Grid columns={2}>
                        <Grid.Column mobile={8} tablet={6} computer={3}>
                            <Button fluid onClick={() => handlePopModal()}
                                color='yellow' floated='right' content='Editar' icon='edit'
                                labelPosition='right' />
                        </Grid.Column>
                        <Grid.Column floated="right" mobile={8} tablet={6} computer={3}>
                            <Button fluid onClick={() => alert('Not implemented yet')}
                                color='red' floated='right' content='Excluir' icon='trash'
                                labelPosition='right' />
                        </Grid.Column>
                    </Grid>

                    {/* Modal 'Editar" */}
                    <ModalNovoCronograma
                        history={props.history}
                        show={modalShowToggle}
                        toggle={() => handlePopModal()}
                        close={() => handleCloseModal()} />

                    <Segment>
                        <Label size='big' attached='top' color='black'>{cronograma.descricao}</Label>
                        <Grid>
                            <Grid.Column mobile={16} computer={8}>
                                <Header as='h3'>
                                    <Icon name='calendar' />
                                    <Header.Content>
                                        Data início:
                                <Header.Subheader>{cronograma.dataInicio.toString()}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Grid.Column>
                            <Grid.Column mobile={16} computer={8}>
                                <Header as='h3'>
                                    <Icon name='calendar' />
                                    <Header.Content>
                                        Data prevista para término:
                                <Header.Subheader>{cronograma.dataFim.toString()}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Grid.Column>
                        </Grid>

                        <Divider />
                        <DisciplinaListContainer disciplinas={cronograma.disciplinas} matchUrl={props.match} />
                    </Segment>
                </>)
                :
                <EmptyHeader
                    icon='warning'
                    title='Algo de estranho aconteceu'
                    subtitle='Tente voltar para sua lista de cronogramas'
                    btnTitle='Voltar'
                    linkTo={`/cronogramas`} />
            }
        </div>
    )
}

export default CronogramaDetail;