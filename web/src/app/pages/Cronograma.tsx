import React, { useState } from 'react'
import { Button, Header, Label, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';
import { CronogramaState } from 'core';
import LoaderComponent from '../shared/components/loader/LoaderComponent';
import DisciplinaListContainer from '../containers/DisciplinaListContainer';
import ModalNovoCronograma from './modal/ModalNovoCronograma';

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
        <div style={{ padding: '2em 5em' }}>
            {cronograma != null ? (
                <>
                    <Button inverted color='blue' content='Cronogramas' icon='left arrow'
                        labelPosition='left' as={Link} to={`../cronogramas`} />

                    <Button onClick={() => handlePopModal()}
                        color='yellow' floated='right' content='Editar' icon='edit'
                        labelPosition='right' />

                    <Button onClick={() => alert('Not implemented yet')}
                        color='red' floated='right' content='Excluir' icon='trash'
                        labelPosition='right' />


                    <ModalNovoCronograma
                        history={props.history}
                        show={modalShowToggle}
                        toggle={() => handlePopModal()}
                        close={() => handleCloseModal()} />

                    <Segment>
                        <Label size='big' attached='top' color='blue'>{cronograma.descricao}</Label>
                        <br />
                        <Header as='h3'>
                            <Icon name='calendar' />
                            <Header.Content>
                                Data início:
                                <Header.Subheader>{cronograma.dataInicio.toString()}</Header.Subheader>
                            </Header.Content>
                        </Header>
                        <Header as='h3'>
                            <Icon name='calendar' />
                            <Header.Content>
                                Data prevista para término:
                                <Header.Subheader>{cronograma.dataFim.toString()}</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Segment>
                    <DisciplinaListContainer disciplinas={cronograma.disciplinas} matchUrl={props.match} />
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