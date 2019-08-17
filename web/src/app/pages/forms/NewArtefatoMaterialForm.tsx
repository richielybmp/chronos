import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Grid, Input, Dropdown } from 'semantic-ui-react';
import { PortalError } from '../../shared/components';
import { AssuntoState, Material } from 'chronos-core';

interface Props {
    assuntoOnDetail: AssuntoState,
    idOnDetail: string,
    close: () => void,
    createMaterial: (idAssunto: string, material: Material) => void,
    updateMaterial: (idAssunto: string, material: Material) => void,
    clearError: () => void,
}

const materiaisOptions = [
    {
        key: "1",
        text: "Vídeo aula",
        value: "1",
    },
    {
        key: "2",
        text: "Livros",
        value: "2",
    },
    {
        key: "3",
        text: "Internet / artigos / post",
        value: "3",
    },
]

const NewArtefatoMaterialForm = (props: Props) => {

    const { close, createMaterial, updateMaterial, idOnDetail } = props;
    const { assunto, error, loading } = props.assuntoOnDetail;

    //#region States
    const [artefatoData, setArtefatoData] = useState('')
    const [artefatoDataErro, setArtefatoDataErro] = useState('')

    const [minutos, setMinutos] = useState(0)
    const [minutosErro, setMinutosErro] = useState('')

    const [tipoMaterial, setTipoMaterial] = useState(0)
    const [tipoMaterialErro, setTipoMaterialErro] = useState('')

    const [ehEdicao, setEhEdicao] = useState(false)
    //#endregion

    const descricaoBotao = idOnDetail != "" ? "Editar" : "Salvar";

    // #region Handles
    const handleDataChange = (e: any) => {
        setArtefatoDataErro('');
        setArtefatoData(e.target.value);
    }

    const handleMinutos = (e: any) => {
        setMinutosErro('');
        setMinutos(e.target.value);
    }

    const handleTipoChanged = (tipo: any) => {
        setTipoMaterialErro('');
        setTipoMaterial(tipo);
    }

    const handleErrorClose = () => {
        props.clearError()
    }

    const validaCampos = () => {
        let inconsistente = false;
        setMinutosErro('');
        setTipoMaterialErro('');
        setArtefatoDataErro('');

        if (minutos === 0) {
            setMinutosErro("Informe a quantidade de minutos.");
            inconsistente = true;
        }

        if (tipoMaterial === 0) {
            setTipoMaterialErro("Informe o tipo de material.");
            inconsistente = true;
        }

        return inconsistente;
    }

    const handleCreateMaterial = (e: any) => {
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
                setEhEdicao(true)
            }
        }
    }, [props.assuntoOnDetail])

    return (
        <Form onSubmit={(e: any, dispatch: any) => handleCreateMaterial(e)}>
            <PortalError error={error} handleErrorClose={handleErrorClose} />
            <Container text style={{ padding: '2em 2em' }}>
                {/* {acertosErro &&
                    <Label color='red' basic>  {acertosErro} </Label>
                } */}
                <h2>Novo Material</h2>
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
                                onChange={(e) => handleDataChange(e.target.value)}
                            />
                        </Form.Field>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable>
                    <Grid.Column>
                        <Form.Field className={tipoMaterialErro.length > 0 ? "error" : ""}>
                            <label>Tipo de material</label>
                            <Dropdown
                                placeholder='Tipo de material'
                                search
                                selection
                                options={materiaisOptions}
                                onChange={(e, { value }) => handleTipoChanged(value)}
                            />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Field className={minutosErro.length > 0 ? "error" : ""}>
                            <label>Tempo gasto</label>
                            <Input
                                placeholder='minutos'
                                name='minutos'
                                type="number"
                                min='0'
                                value={minutos}
                                onChange={(e) => handleMinutos(e)}
                            />
                        </Form.Field>
                    </Grid.Column>
                </Grid>
                {/* 
                <Grid columns={2} container stackable>
                    <Grid.Column>
                        <Form.Field>
                            <label>Total de exercícios</label>
                            <Input
                                placeholder='feitos'
                                name='total'
                                type="number"
                                min='0'
                                value={total}
                                onChange={(e) => handleTotalExerciciosChange(e)} />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Field className={acertosErro.length > 0 ? "error" : ""}>
                            <label>Exercícios corretos</label>
                            <Input
                                placeholder='acertados'
                                name='acertos'
                                type="number"
                                min='0'
                                value={acertos}
                                onChange={(e) => handleAcertos(e)}
                            />
                        </Form.Field>
                    </Grid.Column>
                </Grid> */}
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

export default NewArtefatoMaterialForm