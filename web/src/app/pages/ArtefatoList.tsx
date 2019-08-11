import React, { useState, useContext } from 'react'
import { ConfirmDelete, ModalContainer, ArtefatosSection } from '../shared/components';
import NewArtefatoFormContainer from '../containers/NewArtefatoFormContainer';
import ModalNovoArtefato from './modal/ModalNovoArtefato';
import { Assunto, Artefato } from 'chronos-core';
import { ChronosContext } from '../../ChronosRoutes';

interface Props {
    artefatos: Artefato[],
    matchUrl: any,
    history: any,
    deleteArtefato: (id: string) => void
}

function ArtefatoList(props: Props) {

    const context = useContext(ChronosContext);

    let assunto: Assunto = context.getState().cronogramas.assuntoOnDetail.assunto;

    const { artefatos, deleteArtefato } = props

    const hasArtefatos = artefatos.length > 0

    //#region States
    const [novoArtefato, setNovoArtefato] = useState(false)
    const [confirmationDelete, setConfirmationDelete] = useState(false)
    const [idOnDetail, setidOnDetail] = useState("")
    const [idParaDeletar, setIdParaDeletar] = useState("")
    const [modalShowToggle, setmodalShowToggle] = useState(false)
    //#endregion

    //#region Handles
    const handleClose = () => {
        setNovoArtefato(false)
        setidOnDetail("")
        // setIdDisciplinaToCreateSubject("")
    }

    const handlePopModalDelete = () => {
        setConfirmationDelete(!confirmationDelete)
    }

    const handleDeletarArtefato = (id: string) => {
        if (id != null) {
            setConfirmationDelete(true)
            setIdParaDeletar(id)
        }
    }

    const handleUpdateArtefato = (id: string) => {
        setidOnDetail(id)
    }

    const handleNovoArtefato = () => {
        setNovoArtefato(true)
        setidOnDetail("novoartefato")
    }

    const handlePopModal = () => {
        setmodalShowToggle(!modalShowToggle)
    }

    const handleCloseModal = () => {
        setmodalShowToggle(false)
    }
    //#endregion

    const deletarArtefato = () => {
        if (idParaDeletar) {
            deleteArtefato(idParaDeletar)
            setConfirmationDelete(false)
            setIdParaDeletar("")
        }
    }

    // if (!hasArtefatos && !novoArtefato ) {
    //     return (
    //         <EmptyHeader
    //             icon='table'
    //             title='Você ainda não possui nenhum artefato criado'
    //             subtitle='Adicione um tipo de material ou lista de exercícios!'
    //             btnTitle="Novo artefato"
    //             onClick={handleNovoArtefato}
    //         />
    //     )
    // }

    return (
        <>
            {/* Modal 'Excluir Artefato' */}
            <ConfirmDelete
                show={confirmationDelete}
                pergunta="Deseja realmente excluir o artefato?"
                toggle={handlePopModalDelete}
                confirmDelete={deletarArtefato} />

            {/* Modal 'Novo artefato' */}
            <ModalNovoArtefato
                idOnDetail=''
                show={modalShowToggle}
                toggle={handlePopModal}
                close={handleCloseModal} />

            {showArtefatoForm(idOnDetail, handleClose)}

            {/* 
            <DisciplinaTab
                disciplinas={disciplinas}
                matchUrl={matchUrl}
                handleDeleteDisciplina={handleDeletarDisciplina}
                handleUpdateDisciplina={handleUpdateDisciplina}
                handleCreateAssunto={handelCreateAssunto}
                handleAssuntoOnDetail={handleAssuntoOnDetail}
                idOnDetail={idOnDetail}
            /> 
            */}

            <ArtefatosSection />
        </>
    )
}

function showArtefatoForm(idOnDetail: string, handleClose: () => void) {
    if (idOnDetail === "novoartefato" || idOnDetail !== "") {
        return (
            <ModalContainer show={true} toggle={handleClose}>
                <NewArtefatoFormContainer close={handleClose} idOnDetail="" />
            </ModalContainer>
        )
    }
}

export default ArtefatoList