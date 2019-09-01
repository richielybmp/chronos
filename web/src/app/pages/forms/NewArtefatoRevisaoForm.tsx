import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Grid, Input, Label, TextArea, Segment } from 'semantic-ui-react';
import { PortalError } from '../../shared/components';
import { AssuntoState, Revisao, Artefato } from 'chronos-core';
import RevisaoContent from '../../shared/components/content/RevisaoContent';
import Utils from '../../utils/utils';

interface Props {
    assuntoOnDetail: AssuntoState,
    idOnDetail: string,
    close: () => void,
    createRevisao: (revisao: Revisao) => void,
    updateArtefato: (artefatl: Artefato) => void,
    clearError: () => void,
}

const NewArtefatoRevisaoForm = (props: Props) => {

    const { close, createRevisao, updateArtefato, idOnDetail } = props;
    const { assunto, error } = props.assuntoOnDetail;

    //#region States
    const [artefatoData, setArtefatoData] = useState('')
    const [artefatoDataErro, setArtefatoDataErro] = useState('')

    const [optionRevisao, setOptionRevisao] = useState(-1)
    const [optionRevisaoErro, setOptionRevisaoErro] = useState('')

    const [descricao, setDescricao] = useState('')
    const [descricaoErro, setDescricaoErro] = useState('')

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

    const handleDescricaoChange = (value: string) => {
        setDescricao(value);
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

        if (optionRevisao === -1) {
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
                let revisao = new Revisao('', assunto.uuid, artefatoData, descricao, optionRevisao, 1);
                createRevisao(revisao);
                close();
            }
            else if (artefato) {
                let revisao = artefato as Revisao;
                revisao.data = artefatoData;
                revisao.descricao = descricao;
                revisao.escopo = optionRevisao;

                updateArtefato(revisao);
                close();
            }
        }
    }
    //#endregion

    const listenForId = () => {
        if (assunto) {
            var artefato = assunto.artefatos.find(d => d.uuid === idOnDetail);
            if (artefato) {
                const data = artefato.data.split(" ").length > 1 ?
                    new Date(artefato.data).toLocaleString("pt-br").split(" ")[0].split('/').reverse().join('-') : artefato.data

                const escopo = (artefato as Revisao).escopo.toString();

                setArtefatoData(data);
                setOptionRevisao(parseInt(escopo));
                setDescricao(artefato.descricao);
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

                <Segment basic>
                    <RevisaoContent setOptionSelected={handleOptionSelected} value={optionRevisao} />

                    <TextArea
                        placeholder='Anotações'
                        value={descricao}
                        onChange={(e: any) => handleDescricaoChange(e.target.value.toString())}
                    />
                </Segment>

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