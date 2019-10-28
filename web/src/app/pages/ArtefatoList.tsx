import React, { useState, useEffect } from 'react'
import { ModalContainer, ArtefatosSection, ExpansibleButtons, EmptyArtefatosHeader } from '../shared/components';
import { AssuntoState } from 'chronos-core';
import { Segment } from 'semantic-ui-react';
import NewArtefatoMaterialFormContainer from '../containers/NewArtefatoMaterialFormContainer';
import NewArtefatoExercicioFormContainer from '../containers/NewArtefatoExercicioFormContainer';
import NewArtefatoRevisaoFormContainer from '../containers/NewArtefatoRevisaoFormContainer';

interface Props {
    assuntoOnDetail: AssuntoState,
    matchUrl: any,
    history: any,
}

function ArtefatoList(props: Props) {

    const { assunto } = props.assuntoOnDetail

    const artefatos = assunto ? assunto.artefatos : [];

    const hasArtefatos = artefatos && artefatos.length > 0;

    //#region States
    const [novaRevisao, setNovaRevisao] = useState(false)
    const [novoMaterial, setNovoMaterial] = useState(false)
    const [novoExercicio, setNovoExercicio] = useState(false)
    const [keyOnDetail, setKeyOnDetail] = useState("")
    const [idParaEditar, setIdParaEditar] = useState("")

    const materiais = artefatos.filter(x => x.tipoArtefato === 0);
    const revisoes = artefatos.filter(x => x.tipoArtefato === 1);
    const exercicios = artefatos.filter(x => x.tipoArtefato === 2);

    //#endregion

    //#region Handles
    const handleClose = () => {
        setNovaRevisao(false);
        setNovoExercicio(false);
        setNovoMaterial(false);
        setKeyOnDetail("");
        setIdParaEditar("");
    }

    const handleNovaRevisao = () => {
        setNovaRevisao(true)
        setKeyOnDetail("novarevisao")
    }

    const handleNovoMaterial = () => {
        setNovoMaterial(true)
        setKeyOnDetail("novomaterial")
    }

    const handleNovoExercicio = () => {
        setNovoExercicio(true)
        setKeyOnDetail("novoexercicio")
    }

    //#endregion

    const handleEditArtefato = (id: string, tipoArtefato: number) => {
        setIdParaEditar(id);

        switch (tipoArtefato) {
            case 0: //Material
                handleNovoMaterial();
                break;
            case 1: // Revisao
                handleNovaRevisao();
                break;
            case 2: // Exercicio
                handleNovoExercicio();
                break;
            default:
                break;
        }
    }

    return (
        <>
            {novoMaterial && showMaterialForm(keyOnDetail, idParaEditar, handleClose)}
            {novoExercicio && showExerciciosForm(keyOnDetail, idParaEditar, handleClose)}
            {novaRevisao && showRevisaoForm(keyOnDetail, idParaEditar, handleClose)}

            <Segment basic>
                {hasArtefatos ?
                    <>
                        <ExpansibleButtons
                            actionNewMaterial={handleNovoMaterial}
                            actionNewExercicio={handleNovoExercicio}
                            actionNewRevisao={handleNovaRevisao}
                        />
                        <br />

                        <ArtefatosSection m={materiais} r={revisoes} e={exercicios} handleEdit={handleEditArtefato} />
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

function showMaterialForm(keyOnDetail: string, id: string, handleClose: () => void) {
    if (keyOnDetail === "novomaterial" || keyOnDetail !== "") {
        return (
            <ModalContainer show={true} toggle={handleClose}>
                <NewArtefatoMaterialFormContainer close={handleClose} idOnDetail={id} />
            </ModalContainer>
        )
    }

}

function showExerciciosForm(keyOnDetail: string, id: string, handleClose: () => void) {
    if (keyOnDetail === "novoexercicio" || keyOnDetail !== "") {
        return (
            <ModalContainer show={true} toggle={handleClose}>
                <NewArtefatoExercicioFormContainer close={handleClose} idOnDetail={id} />
            </ModalContainer>
        )
    }
}

function showRevisaoForm(keyOnDetail: string, id: string, handleClose: () => void) {
    if (keyOnDetail === "novarevisao" || keyOnDetail !== "") {
        return (
            <ModalContainer show={true} toggle={handleClose}>
                <NewArtefatoRevisaoFormContainer close={handleClose} idOnDetail={id} />
            </ModalContainer>
        )
    }
}

export default ArtefatoList