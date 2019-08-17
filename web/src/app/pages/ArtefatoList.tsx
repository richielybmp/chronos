import React, { useState } from 'react'
import { ConfirmDelete, ModalContainer, ArtefatosSection, ExpansibleButtons } from '../shared/components';
import { Artefato } from 'chronos-core';
import { Segment, Header } from 'semantic-ui-react';
import NewArtefatoMaterialFormContainer from '../containers/NewArtefatoMaterialFormContainer';
import NewArtefatoExercicioFormContainer from '../containers/NewArtefatoExercicioFormContainer';
import NewArtefatoRevisaoFormContainer from '../containers/NewArtefatoRevisaoFormContainer';

interface Props {
    artefatos: Artefato[],
    matchUrl: any,
    history: any,
    deleteArtefato: (id: string) => void
}

function ArtefatoList(props: Props) {

    const { artefatos, deleteArtefato } = props

    const hasArtefatos = artefatos.length > 0

    //#region States
    const [novaRevisao, setNovaRevisao] = useState(false)
    const [novoMaterial, setNovoMaterial] = useState(false)
    const [novoExercicio, setNovoExercicio] = useState(false)

    const [confirmationDelete, setConfirmationDelete] = useState(false)
    const [idOnDetail, setidOnDetail] = useState("")
    const [idParaDeletar, setIdParaDeletar] = useState("")
    const [modalShowToggle, setmodalShowToggle] = useState(false)
    //#endregion

    //#region Handles
    const handleClose = () => {
        setNovaRevisao(false)
        setNovoExercicio(false)
        setNovoMaterial(false)
        setidOnDetail("")
        // setIdDisciplinaToCreateSubject("")
    }

    const handlePopModalDelete = () => {
        setConfirmationDelete(!confirmationDelete)
    }

    // const handleDeletarArtefato = (id: string) => {
    //     if (id != null) {
    //         setConfirmationDelete(true)
    //         setIdParaDeletar(id)
    //     }
    // }

    // const handleUpdateArtefato = (id: string) => {
    //     setidOnDetail(id)
    // }

    const handleNovaRevisao = () => {
        setNovaRevisao(true)
        setidOnDetail("novarevisao")
    }

    const handleNovoMaterial = () => {
        setNovoMaterial(true)
        setidOnDetail("novomaterial")
    }

    const handleNovoExercicio = () => {
        setNovoExercicio(true)
        setidOnDetail("novoexercicio")
    }

    // const handlePopModal = () => {
    //     setmodalShowToggle(!modalShowToggle)
    // }

    // const handleCloseModal = () => {
    //     setmodalShowToggle(false)
    // }
    //#endregion

    const deletarArtefato = () => {
        if (idParaDeletar) {
            deleteArtefato(idParaDeletar)
            setConfirmationDelete(false)
            setIdParaDeletar("")
        }
    }

    return (
        <>
            {/* Modal 'Excluir Artefato' */}
            <ConfirmDelete
                show={confirmationDelete}
                pergunta="Deseja realmente excluir o artefato?"
                toggle={handlePopModalDelete}
                confirmDelete={deletarArtefato} />


            {novoMaterial && showMaterialForm(idOnDetail, handleClose)}
            {novoExercicio && showExerciciosForm(idOnDetail, handleClose)}
            {novaRevisao && showRevisaoForm(idOnDetail, handleClose)}

            <Segment basic>
                {/* {artefatos.length > 0 ? */}
                {true ?
                    <>
                        <ExpansibleButtons
                            actionNewMaterial={handleNovoMaterial}
                            actionNewExercicio={handleNovoExercicio}
                            actionNewRevisao={handleNovaRevisao}
                        />
                        <br />
                        <ArtefatosSection />
                    </>
                    :
                    <EmptyArtefatosHeader
                        actionNewMaterial={handleNovoMaterial}
                        actionNewExercicio={handleNovoExercicio}
                        actionNewRevisao={handleNovaRevisao}
                    />
                }
            </Segment>

        </>
    )
}

function showMaterialForm(idOnDetail: string, handleClose: () => void) {
    if (idOnDetail === "novomaterial" || idOnDetail !== "") {
        return (
            <ModalContainer show={true} toggle={handleClose}>
                <NewArtefatoMaterialFormContainer close={handleClose} idOnDetail="" />
            </ModalContainer>
        )
    }
}

function showExerciciosForm(idOnDetail: string, handleClose: () => void) {
    if (idOnDetail === "novoexercicio" || idOnDetail !== "") {
        return (
            <ModalContainer show={true} toggle={handleClose}>
                <NewArtefatoExercicioFormContainer close={handleClose} idOnDetail="" />
            </ModalContainer>
        )
    }
}

function showRevisaoForm(idOnDetail: string, handleClose: () => void) {
    if (idOnDetail === "novarevisao" || idOnDetail !== "") {
        return (
            <ModalContainer show={true} toggle={handleClose}>
                <NewArtefatoRevisaoFormContainer close={handleClose} idOnDetail="" />
            </ModalContainer>
        )
    }
}

function EmptyArtefatosHeader(props: any) {

    return (
        <>
            <Header as='h2' textAlign='center'>
                Crie itens para acompanhar seus estudos
            <Header.Subheader>Você pode escolher entre Revisões, Materiais de Estudo ou Lista de Exercícios</Header.Subheader>
                <br />

            </Header>
            <Segment basic>
                <ExpansibleButtons
                    actionNewMaterial={props.actionNewMaterial}
                    actionNewExercicio={props.actionNewExercicio}
                    actionNewRevisao={props.actionNewRevisao}
                />
            </Segment>
        </>
    );
}

export default ArtefatoList