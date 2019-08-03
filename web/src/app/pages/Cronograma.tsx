import React, { useState } from 'react'
import { CronogramaState } from 'chronos-core';
import ModalNovoCronograma from './modal/ModalNovoCronograma';
import { LoaderComponent, EmptyHeader, CronogramaSubHeader, CronogramaContent, ConfirmDelete, PortalError } from '../shared/components';
import DisciplinaListContainer from '../containers/DisciplinaListContainer';

interface Props {
    match: any,
    history: any,
    cronogramaOnDetail: CronogramaState,
    delete: (id: string, callback: Function) => void,
    clearError: () => void
}

const CronogramaDetail = (props: Props) => {

    const { cronograma, loading, error } = props.cronogramaOnDetail

    const [modalShowToggle, setmodalShowToggle] = useState(false)
    const [confirmationDelete, setConfirmationDelete] = useState(false)

    //#region Handles
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

    const handleErrorClose = () => {
        props.clearError()
    }
    //#endregion

    const deleteCronograma = () => {
        if (cronograma != null) {
            setConfirmationDelete(false)
            props.delete(cronograma.uuid, () => {
                props.history.push(`${process.env.PUBLIC_URL}/cronogramas`);
            })
        }
    }

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
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
            <ConfirmDelete
                show={confirmationDelete}
                pergunta="Deseja realmente excluir o cronograma?"
                toggle={handlePopModalDelete}
                confirmDelete={deleteCronograma} />

            {
                cronograma != null ? (
                    <>
                        <CronogramaSubHeader complement={null} titulo={cronograma.titulo} handlePopModal={handlePopModal} deleteAction={handleDeleteAction} />
                        <CronogramaContent cronograma={cronograma}>
                            <DisciplinaListContainer history={props.history} disciplinas={cronograma.disciplinas} matchUrl={props.match} />
                            <PortalError error={error} handleErrorClose={handleErrorClose} />
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
        </div>
    )
}

export default CronogramaDetail;