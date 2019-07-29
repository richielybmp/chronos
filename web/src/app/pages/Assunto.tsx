import React, { useState } from 'react'
import { EmptyHeader, CronogramaSubHeader, ConfirmDelete, LoaderComponent, PortalError, AssuntoContent } from '../shared/components';
import { AssuntoState, CronogramaState } from 'chronos-core';

interface Props {
    match: any,
    history: any,
    assuntoOnDetail: AssuntoState,
    cronogramaOnDetail: CronogramaState,
    delete: (id: string, callback: Function) => void,
    clearError: () => void,
}

const AssuntoDetail = (props: Props) => {

    const { assunto, loading, error } = props.assuntoOnDetail
    const { cronograma } = props.cronogramaOnDetail

    const [modalShowToggle, setmodalShowToggle] = useState(false)
    const [confirmationDelete, setConfirmationDelete] = useState(false)


    var disciplina;
    if (cronograma && assunto) {
        disciplina = cronograma.disciplinas.find(d => d.uuid == assunto.disciplina_uuid)
    }

    const handlePopModal = () => {
        setmodalShowToggle(!modalShowToggle)
    }

    const handlePopModalDelete = () => {
        setConfirmationDelete(!confirmationDelete)
    }

    const handleDeleteAction = () => {
        setConfirmationDelete(true)
    }

    const deleteAssunto = () => {
        if (assunto != null) {
            setConfirmationDelete(false)
            props.delete(assunto.uuid, () => {
                //props.history.push(`${process.env.PUBLIC_URL}/cronograma/`);
            })
        }
    }

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    const handleErrorClose = () => {
        props.clearError()
    }

    return (
        <>
            {/* Modal 'Excluir" */}
            <ConfirmDelete
                show={confirmationDelete}
                pergunta="Deseja realmente excluir o assunto?"
                toggle={handlePopModalDelete}
                confirmDelete={deleteAssunto} />

            {assunto !== null && assunto !== undefined && (
                <>
                    <CronogramaSubHeader complement={{ assunto: true, disciplina: disciplina }} titulo={assunto.descricao} handlePopModal={handlePopModal} deleteAction={handleDeleteAction} />

                    <AssuntoContent assunto={assunto}>
                        {/* <ArtefatoListContainer history={props.history} artefatos={cronograma.disciplinas} matchUrl={props.match} /> */}
                        <PortalError error={error} handleErrorClose={handleErrorClose} />
                    </AssuntoContent>

                    <br />
                    {/* <EmptyHeader
                        icon='table'
                        title='Você ainda não possui nenhum artefato criado'
                        subtitle='Adicione artefatos!'
                        btnTitle="Novo artefato"
                        onClick={() => alert('not implemented yet')}
                    /> */}

                </>
            )
            }
        </>
    )
}

export default AssuntoDetail;