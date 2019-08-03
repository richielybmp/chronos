import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Grid } from 'semantic-ui-react';
import { PortalError } from '../../shared/components';
import { AssuntoState, Artefato } from 'chronos-core';

interface Props {
    assuntoOnDetail: AssuntoState,
    idOnDetail: string,
    close: () => void,
    createArtefato: (idAssunto: string, artefato: Artefato) => void,
    updateArtefato: (idAssunto: string, assunto: Artefato) => void,
    clearError: () => void,
}

const NewArtefatoForm = (props: Props) => {

    const { close, createArtefato, idOnDetail, updateArtefato } = props;
    const { assunto, error, loading } = props.assuntoOnDetail;

    //#region States
    // const [disciplinaTitulo, setNovaDisciplinaTitulo] = useState('')
    // const [disciplinaTituloErro, setNovaDisciplinaTituloErro] = useState('')

    // const [disciplinaDescricao, setNovaDisciplinaDescricao] = useState('')
    // const [disciplinaDescricaoErro, setNovaDisciplinaDescricaoErro] = useState('')

    const [ehEdicao, setEhEdicao] = useState(false)
    //#endregion

    const descricaoBotao = idOnDetail != "" ? "Editar" : "Salvar";

    // #region Handles
    const handleTituloChange = (e: any) => {
        // setNovaDisciplinaTituloErro('')
        // setNovaDisciplinaTitulo(e.target.value)
    }

    const handleDescricaoChange = (e: any) => {
        // setNovaDisciplinaDescricaoErro('')
        // setNovaDisciplinaDescricao(e.target.value)
    }

    const handleErrorClose = () => {
        props.clearError()
    }

    const validaCampos = () => {
        let inconsistente = false;
        // setNovaDisciplinaTituloErro('')
        // setNovaDisciplinaDescricaoErro('')

        // if (disciplinaTitulo == '') {
        //     setNovaDisciplinaTituloErro("Título da disciplina obrigatório.")
        //     inconsistente = true
        // }
        // if (disciplinaDescricao == '') {
        //     setNovaDisciplinaDescricaoErro("Descrição da disciplina obrigatório.")
        //     inconsistente = true
        // }
        return inconsistente;
    }

    const handleCreateDisciplina = (e: any) => {
        e.preventDefault();
        if (!validaCampos() && assunto) {

            var artefato = assunto.artefatos.find(d => d.uuid == idOnDetail);

            if (!ehEdicao) {
                // const novo_artefato = new Disciplina("", disciplinaTitulo, disciplinaDescricao, [])
                // createArtefato(cronograma.uuid, nova_disciplina);
                close();
            }
            else if (artefato) {
                // const nova_disciplina = new Disciplina(idOnDetail, disciplinaTitulo, disciplinaDescricao, [])
                // updateDisciplina(cronograma.uuid, nova_disciplina)
                close();
            }
        }
    }
    //#endregion

    useEffect(() => {
        if (assunto) {
            var artefato = assunto.artefatos.find(d => d.uuid == idOnDetail);
            if (artefato) {
                // setNovaDisciplinaTitulo(disciplina.nome)
                // setNovaDisciplinaDescricao(disciplina.descricao)
                setEhEdicao(true)
            }
        }
    }, [props.assuntoOnDetail])

    return (
        <Form onSubmit={(e: any, dispatch: any) => handleCreateDisciplina(e)}>
            <PortalError error={error} handleErrorClose={handleErrorClose} />
            <Container text style={{ padding: '2em 2em' }}>
                <Grid columns={1} container stackable>
                    <Grid.Column>
                        {/* <Form.Field className={disciplinaTituloErro.length > 0 ? "error" : ""}>
                            <label>Nome da disciplina</label>
                            <input
                                placeholder='Disciplina'
                                value={disciplinaTitulo}
                                onChange={(e) => handleTituloChange(e)} />
                        </Form.Field> */}
                    </Grid.Column>
                    <Grid.Column>
                        {/* <Form.Field className={disciplinaDescricaoErro.length > 0 ? "error" : ""}>
                            <label>Descrição da disciplina</label>
                            <input
                                placeholder='Descrição'
                                value={disciplinaDescricao}
                                onChange={(e) => handleDescricaoChange(e)} />
                        </Form.Field> */}
                    </Grid.Column>
                    <Grid.Column floated='right' mobile={16} tablet={6} computer={4}>
                        <Form.Field>
                            <Button
                                fluid
                                icon='check'
                                positive
                                labelPosition='right'
                                content={descricaoBotao}
                            />
                        </Form.Field>
                    </Grid.Column>
                </Grid>
            </Container>
        </Form>
    )
}

export default NewArtefatoForm