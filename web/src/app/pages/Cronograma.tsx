import React, { useState, useEffect } from 'react'
import { CronogramaState } from 'chronos-core';
import ModalNovoCronograma from './modal/ModalNovoCronograma';
import { LoaderComponent, EmptyHeader, CronogramaSubHeader, CronogramaContent, ConfirmDeleteCronograma } from '../shared/components';
import DisciplinaListContainer from '../containers/DisciplinaListContainer';
import { Portal, Button, Segment, Header } from 'semantic-ui-react';

interface Props {
    match: any,
    history: any,
    cronogramaOnDetail: CronogramaState,
    delete: (id: string) => void,
    clearError: () => void
}

const CronogramaDetail = (props: Props) => {

    const { cronograma, loading, error } = props.cronogramaOnDetail

    const [modalShowToggle, setmodalShowToggle] = useState(false)
    const [confirmationDelete, setConfirmationDelete] = useState(false)

    const handlePopModal = () => {
        setmodalShowToggle(!modalShowToggle)
    }

    const handlePopModalDelete = () => {
        setConfirmationDelete(!confirmationDelete)
    }

    const handleCloseModal = () => {
        setmodalShowToggle(false)
    }

    const handleDeleteAction = () => {
        setConfirmationDelete(true)
    }

    const deleteCronograma = () => {
        if (cronograma != null) {
            props.delete(cronograma.codigo)
            setConfirmationDelete(false)
        }
    }

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    if (error) {

    }

    const handleErrorClose = () => {
        props.clearError()
        //setPortalError(false)
    }

    return (
        <div>
            {/* Modal 'Editar" */}
            <ModalNovoCronograma
                history={props.history}
                show={modalShowToggle}
                toggle={handlePopModal}
                close={handleCloseModal} />

            {/* Modal 'Excluir" */}
            <ConfirmDeleteCronograma
                show={confirmationDelete}
                toggle={handlePopModalDelete}
                confirmDelete={deleteCronograma} />

            {
                cronograma != null ? (
                    <>
                        <CronogramaSubHeader titulo={cronograma.titulo} handlePopModal={handlePopModal} deleteAction={handleDeleteAction} />

                        <CronogramaContent cronograma={cronograma}>
                            <DisciplinaListContainer disciplinas={cronograma.disciplinas} matchUrl={props.match} />

                            {error ?
                                <Portal onClose={() => handleErrorClose()} open={error != null}>
                                    <Segment color='red'
                                        style={{
                                            position: " fixed",
                                            top: " 50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            zIndex: 1000,
                                        }}
                                    >
                                        <Header>Erro</Header>
                                        <p>{error.message}</p>

                                        <Button
                                            content='Close Portal'
                                            negative
                                            onClick={() => handleErrorClose()}
                                        />
                                    </Segment>
                                </Portal>
                                : null}
                        </CronogramaContent>

                    </>
                ) :
                    <EmptyHeader
                        icon='warning'
                        title='Algo de estranho aconteceu'
                        subtitle='Tente voltar para sua lista de cronogramas'
                        btnTitle='Voltar'
                        linkTo={`/cronogramas`} />
            }
        </div >
    )
}

export default CronogramaDetail;