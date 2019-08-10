import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Grid, Input, Label, Dropdown } from 'semantic-ui-react';
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

const NewArtefatoForm = (props: Props) => {

    const { close, createArtefato, updateArtefato, idOnDetail } = props;
    const { assunto, error, loading } = props.assuntoOnDetail;

    //#region States
    const [artefatoData, setArtefatoData] = useState('')
    const [artefatoDataErro, setArtefatoDataErro] = useState('')

    const [total, setTotal] = useState(0)
    const [totalErro, setTotalErro] = useState('')

    const [acertos, setAcertos] = useState(0)
    const [acertosErro, setAcertosErro] = useState('')

    const [minutos, setMinutos] = useState(0)
    const [minutosErro, setMinutosErro] = useState('')

    const [ehEdicao, setEhEdicao] = useState(false)
    //#endregion

    const descricaoBotao = idOnDetail != "" ? "Editar" : "Salvar";

    // #region Handles
    const handleDataChange = (e: any) => {
        setArtefatoDataErro('')
        setArtefatoData(e.target.value)
    }

    const handleMinutos = (e: any) => {
        setMinutosErro('')
        setMinutos(e.target.value)
    }

    const handleTotalExerciciosChange = (e: any) => {
        const valor = parseInt(e.target.value);
        setTotalErro('')
        if (valor > acertos) {
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
                setEhEdicao(true)
            }
        }
    }, [props.assuntoOnDetail])

    return (
        <Form onSubmit={(e: any, dispatch: any) => handleCreateDisciplina(e)}>
            <PortalError error={error} handleErrorClose={handleErrorClose} />
            <Container text style={{ padding: '2em 2em' }}>
                {acertosErro &&
                    <Label color='red' basic>  {acertosErro} </Label>
                }
                <h2>Novo artefato</h2>
                <Grid columns={1} container stackable>
                    <Grid.Column>
                        <Form.Field inline className={artefatoDataErro.length > 0 ? "error" : ""}>
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
                        <Form.Field>
                            <label>Tipo de material</label>
                            <Dropdown
                                placeholder='Tipo de material'
                                search
                                selection
                                options={materiaisOptions} />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Field className={acertosErro.length > 0 ? "error" : ""}>
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

export default NewArtefatoForm