import React, { useState } from 'react'
import { CronogramaSubHeader, ConfirmDelete, LoaderComponent, PortalError, AssuntoContent } from '../shared/components';
import { AssuntoState, CronogramaState, Assunto } from 'chronos-core';
import ArtefatoListContainer from '../containers/ArtefatoListContainer';
import { Dropdown, Container, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface Props {
    match: any,
    history: any,
    assuntoOnDetail: AssuntoState,
    cronogramaOnDetail: CronogramaState,
    delete: (id: string, callback: Function) => void,
    fetchAssunto: (idDisciplina: string, idAssunto: string) => void,
    // clearError: () => void,
    editAssunto: (assunto: Assunto) => void,
}

const AssuntoDetail = (props: Props) => {

    const { match, editAssunto } = props

    const { assunto, loading, error } = props.assuntoOnDetail
    const { cronograma } = props.cronogramaOnDetail

    const [modalShowToggle, setmodalShowToggle] = useState(false)
    const [confirmationDelete, setConfirmationDelete] = useState(false)

    var disciplina;
    if (cronograma && assunto) {
        disciplina = cronograma.disciplinas.find(d => d.uuid === assunto.disciplina_uuid)
    }

    //#region Handles
    const handlePopModal = () => {
        setmodalShowToggle(!modalShowToggle)
    }

    const handlePopModalDelete = () => {
        setConfirmationDelete(!confirmationDelete)
    }

    const handleDeleteAction = () => {
        setConfirmationDelete(true)
    }

    const handleFetchAssunto = (idDisciplina: string, idAssunto: string) => {
        props.fetchAssunto(idDisciplina, idAssunto)
    }
    //#endregion

    const deleteAssunto = () => {
        if (assunto != null) {
            setConfirmationDelete(false)
            props.delete(assunto.uuid, () => {
                props.history.goBack()
            })
        }
    }

    if (loading || props.assuntoOnDetail.loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    const handleErrorClose = () => {
        // props.clearError()
    }

    const handleUpdateAssunto = (descricao: string) => {
        if (assunto)
            editAssunto(new Assunto(assunto.uuid, assunto.disciplina_uuid, descricao))
    }

    return (
        <>
            {/* Modal 'Excluir" */}
            <ConfirmDelete
                show={confirmationDelete}
                pergunta="Deseja realmente excluir o assunto?"
                toggle={handlePopModalDelete}
                confirmDelete={deleteAssunto} />

            {assunto !== null && assunto !== undefined &&
                (<>
                    <CronogramaSubHeader
                        complement={{ assunto: true, disciplina: disciplina }}
                        titulo={assunto.descricao}
                        handlePopModal={handlePopModal}
                        deleteAction={handleDeleteAction} />

                    {/* TODO: Componentizar */}
                    {disciplina &&
                        <Container>
                            <Divider />
                            <Dropdown item text='Outros assuntos' className='outros-assuntos' style={{ float: 'right' }}>
                                <Dropdown.Menu>
                                    {disciplina.assuntos.length > 0 &&
                                        disciplina.assuntos.map((a: Assunto, index: number) => {
                                            const url = match.url.substring(0, match.url.lastIndexOf('/assunto/'))
                                            return (
                                                <Dropdown.Item
                                                    key={index}
                                                    as={Link}
                                                    to={`${url}/assunto/${a.uuid}`}
                                                    onClick={() => handleFetchAssunto(a.disciplina_uuid, a.uuid)}
                                                >
                                                    {a.descricao}
                                                </Dropdown.Item>
                                            )
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Container>
                    }

                    <AssuntoContent assunto={assunto} editAssunto={handleUpdateAssunto}>
                        <ArtefatoListContainer history={props.history} artefatos={assunto.artefatos} matchUrl={props.match} />
                        <PortalError error={error} handleErrorClose={handleErrorClose} />
                    </AssuntoContent>

                </>)
            }
        </>
    )
}

export default AssuntoDetail;