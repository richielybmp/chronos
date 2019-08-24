import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Grid, Input, Label } from 'semantic-ui-react';
import { PortalError } from '../../shared/components';
import { AssuntoState, Revisao } from 'chronos-core';
import RevisaoContent from '../../shared/components/content/RevisaoContent';

interface Props {
    assuntoOnDetail: AssuntoState,
    idOnDetail: string,
    close: () => void,
    createRevisao: (idAssunto: string, revisao: Revisao) => void,
    updateRevisao: (idAssunto: string, revisao: Revisao) => void,
    clearError: () => void,
}

const NewArtefatoRevisaoForm = (props: Props) => {

    const { close, createRevisao, updateRevisao, idOnDetail } = props;
    const { assunto, error } = props.assuntoOnDetail;

    //#region States
    const [artefatoData, setArtefatoData] = useState('')
    const [artefatoDataErro, setArtefatoDataErro] = useState('')

    const [optionRevisao, setOptionRevisao] = useState(-1)
    const [optionRevisaoErro, setOptionRevisaoErro] = useState('')

    const [ehEdicao, setEhEdicao] = useState(false)
    //#endregion

    const descricaoBotao = idOnDetail !== "" ? "Editar" : "Salvar";

    // #region Handles
    const handleDataChange = (e: any) => {
        setArtefatoDataErro('')
        setArtefatoData(e.target.value)
    }

    const handleOptionSelected = (option: number) => {
        setOptionRevisao(option);
    }

    const handleErrorClose = () => {
        props.clearError()
    }

    const validaCampos = () => {
        let inconsistente = false;
        setArtefatoDataErro('');
        setOptionRevisaoErro('');

        if (artefatoData === '') {
            setArtefatoDataErro("A data da realização da revisão é obrigatória.");
            inconsistente = true;
        }

        if (!optionRevisao) {
            setOptionRevisaoErro("Selecione alguma das opções de período da revisão realizada.");
            inconsistente = true;
        }
        return inconsistente;
    }

    const handleCreateRevisao = (e: any) => {
        e.preventDefault();

        if (!validaCampos() && assunto) {

            var artefato = assunto.artefatos.find(d => d.uuid === idOnDetail);

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

    const listenForId = () => {
        if (assunto) {
            var artefato = assunto.artefatos.find(d => d.uuid === idOnDetail);
            if (artefato) {

                const data = '2019-12-03'
                const escopo = (artefato as Revisao).escopo;

                setArtefatoData(data);
                setOptionRevisao(escopo);
                setEhEdicao(true);

            }
        }
    }

    useEffect(() => {
        listenForId();
        return listenForId;
    }, [props.idOnDetail])

    return (
        <Form onSubmit={(e: any, dispatch: any) => handleCreateRevisao(e)}>
            <PortalError error={error} handleErrorClose={handleErrorClose} />
            <Container text style={{ padding: '2em 2em' }}>
                <h2>{ehEdicao ? `Editar` : `Nova`} revisão</h2>
                <Grid columns={1} container stackable>
                    <Grid.Column mobile={6}>
                        <Form.Field className={artefatoDataErro.length > 0 ? "error" : ""}>
                            <label>Data</label>
                            <Input
                                type="date"
                                icon='calendar alternate outline'
                                iconPosition='left'
                                placeholder='Data'
                                defaultValue={artefatoData}
                                onChange={(e) => handleDataChange(e)}
                            />
                        </Form.Field>
                    </Grid.Column>
                </Grid>

                <RevisaoContent setOptionSelected={handleOptionSelected} value={optionRevisao} />

                {optionRevisaoErro.length > 0 &&
                    <Label color='red' basic>{optionRevisaoErro} </Label>
                }

                <Grid>
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

export default NewArtefatoRevisaoForm