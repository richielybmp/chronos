import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Grid } from 'semantic-ui-react';
import { Disciplina, Cronograma, CronogramaState } from 'chronos-core';
import { PortalError } from '../../shared/components';

interface Props {
    cronogramaOnDetail: CronogramaState,
    idOnDetail: string,
    close: () => void,
    createDisciplina: (id: string, disciplina: Disciplina) => void,
    updateDisciplina: (idCronograma: string, disciplina: Disciplina) => void,
    clearError: () => void,
}

const NewDisciplinaForm = (props: Props) => {

    const { close, createDisciplina, idOnDetail, updateDisciplina } = props;
    const { cronograma, error } = props.cronogramaOnDetail;

    //#region States
    const [disciplinaTitulo, setNovaDisciplinaTitulo] = useState('')
    const [disciplinaTituloErro, setNovaDisciplinaTituloErro] = useState('')

    const [disciplinaDescricao, setNovaDisciplinaDescricao] = useState('')
    const [disciplinaDescricaoErro, setNovaDisciplinaDescricaoErro] = useState('')

    const [ehEdicao, setEhEdicao] = useState(false)
    //#endregion
    const descricaoBotao = idOnDetail != "" ? "Editar" : "Salvar";

    // #region Handles
    const handleTituloChange = (e: any) => {
        setNovaDisciplinaTituloErro('')
        setNovaDisciplinaTitulo(e.target.value)
    }

    const handleDescricaoChange = (e: any) => {
        setNovaDisciplinaDescricaoErro('')
        setNovaDisciplinaDescricao(e.target.value)
    }

    const handleErrorClose = () => {
        props.clearError()
    }

    const validaCampos = () => {
        let inconsistente = false;
        setNovaDisciplinaTituloErro('')
        setNovaDisciplinaDescricaoErro('')

        if (disciplinaTitulo == '') {
            setNovaDisciplinaTituloErro("Título da disciplina obrigatório.")
            inconsistente = true
        }
        if (disciplinaDescricao == '') {
            setNovaDisciplinaDescricaoErro("Descrição da disciplina obrigatório.")
            inconsistente = true
        }
        return inconsistente;
    }

    const handleCreateDisciplina = (e: any) => {
        e.preventDefault();
        if (!validaCampos() && cronograma) {

            var disciplina = cronograma.disciplinas.find(d => d.uuid == idOnDetail);

            if (!ehEdicao) {
                const nova_disciplina = new Disciplina("", cronograma.uuid, disciplinaTitulo, disciplinaDescricao)
                createDisciplina(cronograma.uuid, nova_disciplina);
                close();
            }
            else if (disciplina) {
                const nova_disciplina = new Disciplina(idOnDetail, cronograma.uuid, disciplinaTitulo, disciplinaDescricao)
                updateDisciplina(cronograma.uuid, nova_disciplina)
                close();
            }
        }
    }
    //#endregion

    useEffect(() => {
        if (cronograma) {
            var disciplina = cronograma.disciplinas.find(d => d.uuid == idOnDetail);
            if (disciplina) {
                setNovaDisciplinaTitulo(disciplina.nome)
                setNovaDisciplinaDescricao(disciplina.descricao)
                setEhEdicao(true)
            }
        }
    }, [props.cronogramaOnDetail])

    return (
        <Form onSubmit={(e: any, dispatch: any) => handleCreateDisciplina(e)}>
            <PortalError error={error} handleErrorClose={handleErrorClose} />
            <Container text style={{ padding: '2em 2em' }}>
                <Grid columns={1} container stackable>
                    <Grid.Column>
                        <Form.Field className={disciplinaTituloErro.length > 0 ? "error" : ""}>
                            <label>Nome da disciplina</label>
                            <input
                                placeholder='Disciplina'
                                value={disciplinaTitulo}
                                onChange={(e) => handleTituloChange(e)} />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column>

                        <Form.Field className={disciplinaDescricaoErro.length > 0 ? "error" : ""}>
                            <label>Descrição da disciplina</label>
                            <input
                                placeholder='Descrição'
                                value={disciplinaDescricao}
                                onChange={(e) => handleDescricaoChange(e)} />
                        </Form.Field>
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

export default NewDisciplinaForm