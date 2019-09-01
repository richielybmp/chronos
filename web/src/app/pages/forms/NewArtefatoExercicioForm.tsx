import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Grid, Input, TextArea } from 'semantic-ui-react';
import { PortalError } from '../../shared/components';
import { AssuntoState, Exercicio, Artefato } from 'chronos-core';

interface Props {
    assuntoOnDetail: AssuntoState,
    idOnDetail: string,
    close: () => void,
    createExercicio: (exercicio: Exercicio) => void,
    updateArtefato: (artefato: Artefato) => void,
    clearError: () => void,
}

const NewArtefatoExercicioForm = (props: Props) => {

    const { close, createExercicio, updateArtefato, idOnDetail } = props;
    const { assunto, error } = props.assuntoOnDetail;

    const descricaoBotao = idOnDetail !== "" ? "Editar" : "Salvar";

    //#region States
    const [artefatoData, setArtefatoData] = useState('')
    const [artefatoDataErro, setArtefatoDataErro] = useState('')

    const [total, setTotal] = useState(0)
    const [totalErro, setTotalErro] = useState('')

    const [acertos, setAcertos] = useState(0)
    const [acertosErro, setAcertosErro] = useState('')

    const [descricao, setDescricao] = useState('')
    const [descricaoErro, setDescricaoErro] = useState('')

    const [ehEdicao, setEhEdicao] = useState(false)
    //#endregion

    // #region Handles
    const handleDataChange = (e: any) => {
        setArtefatoDataErro('')
        setArtefatoData(e.target.value)
    }

    const handleTotalExerciciosChange = (e: any) => {
        const valor = parseInt(e.target.value);
        setTotalErro('')
        if (valor >= acertos) {
            setAcertosErro("")
        }
        setTotal(valor)
    }

    const handleAcertos = (e: any) => {
        const valor = parseInt(e.target.value);
        setAcertosErro('')
        if (valor > total) {
            setAcertosErro("Quantidade de exercícios acertados é maior do que o total.")
        }
        setAcertos(valor)
    }

    const handleDescricaoChange = (value: string) => {
        setDescricao(value);
    }

    const handleErrorClose = () => {
        props.clearError()
    }

    const validaCampos = () => {
        let inconsistente = false;
        setArtefatoDataErro('');
        setAcertosErro('');

        if (artefatoData === '') {
            setArtefatoDataErro("A data da realização da revisão é obrigatória.");
            inconsistente = true;
        }

        if (total === 0) {
            setTotalErro("Informe a quantidade de exercícios feitos.");
            inconsistente = true;
        }

        if (acertos === 0) {
            setAcertosErro("Informe a quantidade de exercícios acertados.");
            inconsistente = true;
        }
        else if (acertosErro !== '') {
            inconsistente = true;
        }

        return inconsistente;
    }

    const handleCreateExercicio = (e: any) => {
        e.preventDefault();
        if (!validaCampos() && assunto) {

            var artefato = assunto.artefatos.find(d => d.uuid === idOnDetail);

            if (!ehEdicao) {
                const exercicio = new Exercicio('', assunto.uuid, artefatoData, descricao, total, acertos, 2);
                createExercicio(exercicio);
                close();
            }
            else if (artefato) {
                let exercicio = artefato as Exercicio;
                exercicio.data = artefatoData;
                exercicio.descricao = descricao;
                exercicio.quantidade = total;
                exercicio.acertos = acertos;

                updateArtefato(exercicio);
                close();
            }
        }
    }
    //#endregion

    const listenForId = () => {
        if (assunto) {
            var artefato = assunto.artefatos.find(d => d.uuid === idOnDetail);

            if (artefato) {
                const exercicio = (artefato as Exercicio);
                const data = artefato.data.split(" ").length > 1 ?
                    new Date(artefato.data).toLocaleString("pt-br").split(" ")[0].split('/').reverse().join('-') : artefato.data

                setArtefatoData(data);
                setTotal(exercicio.quantidade);
                setAcertos(exercicio.acertos);
                setDescricao(exercicio.descricao);
                setEhEdicao(true);
            }
        }
    }
    //#endregion

    useEffect(() => {
        listenForId();
        return listenForId;
    }, [props.idOnDetail])

    return (
        <Form onSubmit={(e: any, dispatch: any) => handleCreateExercicio(e)}>
            <PortalError error={error} handleErrorClose={handleErrorClose} />
            <Container text style={{ padding: '2em 2em' }}>

                {ehEdicao ?
                    <h2>Editar exercício</h2>
                    :
                    <h2>Novo exercício</h2>
                }

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
                <Grid columns={2} container stackable>
                    <Grid.Column>
                        <Form.Field className={totalErro.length > 0 ? "error" : ""}>
                            <div className={`validate-input ${totalErro !== "" && "alert-validate2"}`} data-validate={totalErro}>
                                <label>Total de exercícios</label>
                                <Input
                                    placeholder='feitos'
                                    name='total'
                                    type="number"
                                    min='0'
                                    value={total}
                                    onChange={(e) => handleTotalExerciciosChange(e)} />
                            </div>
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Field className={acertosErro.length > 0 ? "error" : ""}>
                            <div className={`validate-input ${acertosErro !== "" && "alert-validate2"}`} data-validate={acertosErro}>                            <label>Exercícios corretos</label>
                                <Input
                                    placeholder='acertados'
                                    name='acertos'
                                    type="number"
                                    min='0'
                                    value={acertos}
                                    onChange={(e) => handleAcertos(e)}
                                />
                            </div>
                        </Form.Field>
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column>
                        <TextArea
                            placeholder='Anotações'
                            value={descricao}
                            onChange={(e: any) => handleDescricaoChange(e.target.value.toString())}
                        />
                    </Grid.Column>
                </Grid>
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

export default NewArtefatoExercicioForm