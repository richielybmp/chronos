import React, { useState } from 'react'
import { Disciplina } from 'chronos-core';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';
import { DisciplinaTab, ConfirmDelete, ModalContainer } from '../shared/components';
import NewDisciplinaFormContainer from '../containers/NewDisciplinaFormContainer';
import NewAssuntoFormContainer from '../containers/NewAssuntoFormContainer';

interface Props {
    disciplinas: Disciplina[],
    matchUrl: any,
    history: any,
    deleteDisciplina: (id: string) => void,
}

function DisciplinaList(props: Props) {
    const { disciplinas, matchUrl, deleteDisciplina } = props

    const hasDisciplinas = disciplinas.length > 0

    //#region States
    const [novaDisciplina, setnovaDisciplina] = useState(false)
    const [confirmationDelete, setConfirmationDelete] = useState(false)

    const [idOnDetail, setidOnDetail] = useState("")
    const [idParaDeletar, setIdParaDeletar] = useState("")
    const [idDisciplinaToCreateSubject, setIdDisciplinaToCreateSubject] = useState("")
    //#endregion

    //#region Handles
    const handleClose = () => {
        setnovaDisciplina(false)
        setidOnDetail("")
        setIdDisciplinaToCreateSubject("")
    }

    const handlePopModalDelete = () => {
        setConfirmationDelete(!confirmationDelete)
    }

    const handleDeletarDisciplina = (id: string) => {
        if (id != null) {
            setConfirmationDelete(true)
            setIdParaDeletar(id)
        }
    }

    const handleUpdateDisciplina = (id: string) => {
        setidOnDetail(id)
    }

    const handleNovaDisciplina = () => {
        setnovaDisciplina(true)
        setidOnDetail("novadisciplina")
    }

    const handelCreateAssunto = (id: string) => {
        setIdDisciplinaToCreateSubject(id)
    }
    //#endregion

    const deletarDisciplina = () => {
        if (idParaDeletar) {
            deleteDisciplina(idParaDeletar)
            setConfirmationDelete(false)
            setIdParaDeletar("")
        }
    }

    if (!hasDisciplinas && !novaDisciplina) {
        return (
            <EmptyHeader
                icon='table'
                title='Você ainda não possui nenhuma Disciplina criada'
                subtitle='Adicione disciplinas para podermos começar!'
                btnTitle="Nova disicplina"
                onClick={handleNovaDisciplina}
            />
        )
    }

    return (
        <>
            {/* Modal 'Excluir" */}
            <ConfirmDelete
                show={confirmationDelete}
                pergunta="Deseja realmente excluir a disciplina?"
                toggle={handlePopModalDelete}
                confirmDelete={deletarDisciplina} />

            {showDisciplinaForm(idOnDetail, handleClose)}
            {showAssuntoForm(idDisciplinaToCreateSubject, handleClose)}

            <DisciplinaTab
                disciplinas={disciplinas}
                matchUrl={matchUrl}
                handleDeleteDisciplina={handleDeletarDisciplina}
                handleUpdateDisciplina={handleUpdateDisciplina}
                handleCreateAssunto={handelCreateAssunto}
                idOnDetail={idOnDetail}
            />
        </>
    )
}

function showDisciplinaForm(idOnDetail: string, handleClose: () => void) {
    if (idOnDetail === "novadisciplina" || idOnDetail !== "") {
        return (
            <ModalContainer show={true} toggle={handleClose}>
                <NewDisciplinaFormContainer close={handleClose} idOnDetail={idOnDetail} />
            </ModalContainer>
        )
    }
}

function showAssuntoForm(idDisciplinaToCreateSubject: string, handleClose: () => void) {
    return (
        <ModalContainer show={idDisciplinaToCreateSubject !== ""} toggle={handleClose}>
            <NewAssuntoFormContainer idOnDetail={idDisciplinaToCreateSubject} />
        </ModalContainer>
    )
}

export default DisciplinaList