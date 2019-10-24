import React, { useState, useEffect } from 'react'
import { Form, Button, Grid, Container } from 'semantic-ui-react';
import { Cronograma, CronogramaState } from 'chronos-core';
import { LoaderComponent, PortalError } from '../../shared/components';

interface Props {
    novoCronograma: CronogramaState,
    cronogramaOnDetail: CronogramaState,
    history: any,
    createCronograma: (cronograma: Cronograma) => void,
    editCronograma: (cronograma: Cronograma) => void,
    resetMe: () => void,
    close: () => void,
    clearError: () => void,
}

export const NewCronogramaForm = (props: Props) => {

    const { cronograma, error, loading } = props.novoCronograma
    const { resetMe } = props

    //#region 'States'
    const [cronogramaTitulo, setNovoCronogramaTitulo] = useState('')
    const [cronogramaTituloErro, setNovoCronogramaTituloErro] = useState('')

    const [cronogramaDescricao, setNovoCronogramaDescricao] = useState('')
    const [cronogramaDescricaoErro, setNovoCronogramaDescricaoErro] = useState('')

    const [cronogramaDataInicio, setNovoCronogramaDataInicio] = useState('')
    const [cronogramaDataInicioErro, setNovoCronogramaDataInicioErro] = useState('')

    const [cronogramaDataFim, setNovoCronogramaDataFim] = useState('')
    const [cronogramaDataFimErro, setNovoCronogramaDataFimErro] = useState('')

    const [ehEdicao, setEhEdicao] = useState(false)

    const [dataMinima, setDataMinima] = useState(new Date().toISOString().substring(0, 10))
    //#endregion

    //#region 'Effects'
    useEffect(() => {
        const reset = () => {
            resetMe();
        };
        return () => {
            reset();
        }
    }, [resetMe])

    useEffect(() => {
        if (cronograma && !error) {
            props.close()
        }
    })

    useEffect(() => {
        if (props.cronogramaOnDetail.cronograma != null) {
            const { cronograma } = props.cronogramaOnDetail

            const dateI = cronograma.inicio.split(" ").length > 1 ?
                new Date(cronograma.inicio).toLocaleString("pt-br").split(" ")[0].split('/').reverse().join('-') : cronograma.inicio
            const dateF = cronograma.fim.split(" ").length > 1 ?
                new Date(cronograma.fim).toLocaleString("pt-br").split(" ")[0].split('/').reverse().join('-') : cronograma.fim

            setNovoCronogramaDataInicio(dateI)
            setNovoCronogramaDataFim(dateF)
            setNovoCronogramaTitulo(cronograma.titulo)
            setNovoCronogramaDescricao(cronograma.descricao)
            setDataMinima(cronograma.inicio.substring(0, 10))
            setEhEdicao(true)
        }
    }, [props.cronogramaOnDetail])

    //#endregion

    //#region 'Handles'
    const handleTituloChange = (e: any) => {
        setNovoCronogramaTituloErro('')
        setNovoCronogramaTitulo(e.target.value)
    }

    const handleDescricaoChange = (e: any) => {
        setNovoCronogramaDescricaoErro('')
        setNovoCronogramaDescricao(e.target.value)
    }

    const handleDataInicioChange = (e: any) => {
        setNovoCronogramaDataInicioErro('')
        setNovoCronogramaDataInicio(e.target.value)
    }

    const handleDataFimChange = (e: any) => {
        setNovoCronogramaDataFimErro('')
        setNovoCronogramaDataFim(e.target.value)
    }

    const handleErrorClose = () => {
        props.clearError()
    }

    //#endregion

    const validaCampos = () => {
        let inconsistente = false;
        setNovoCronogramaTituloErro('')
        setNovoCronogramaDescricaoErro('')
        setNovoCronogramaDataInicioErro('')
        setNovoCronogramaDataFimErro('')

        if (cronogramaTitulo === '') {
            setNovoCronogramaTituloErro("Título do cronograma obrigatório.")
            inconsistente = true
        }
        if (cronogramaDataInicio === '') {
            setNovoCronogramaDataInicioErro('Data início do cronograma obrigatório.')
            inconsistente = true
        }
        if (cronogramaDataFim === '') {
            setNovoCronogramaDataFimErro('Data fim do cronograma obrigatório.')
            inconsistente = true
        }

        var inicio = new Date(cronogramaDataInicio.replace(/-/g, '/'))
        var fim = new Date(cronogramaDataFim.replace(/-/g, '/'))

        if (inicio > fim) {
            setNovoCronogramaDataFimErro('Data fim do cronograma deve ser após a data início.')
            inconsistente = true
        }
        return inconsistente;
    }

    const addCronograma = (e: any) => {
        e.preventDefault();
        var obj;
        if (!validaCampos()) {
            if (!ehEdicao) {
                obj = new Cronograma('', cronogramaTitulo, cronogramaDescricao, cronogramaDataInicio, cronogramaDataFim, []);
                props.createCronograma(obj)
            }
            else if (props.cronogramaOnDetail.cronograma) {
                const id = props.cronogramaOnDetail.cronograma.uuid
                obj = new Cronograma(id, cronogramaTitulo, cronogramaDescricao, cronogramaDataInicio, cronogramaDataFim, []);
                props.editCronograma(obj)
                props.close()
            }
        }
    }



    if (loading) {
        return (<Container style={{ padding: '5em 1em' }}>
            <LoaderComponent tamanho='big' titulo="Carregando" />
        </Container>)
    }

    return (
        <Form onSubmit={(e: any, dispatch: any) => addCronograma(e)}>

            <PortalError error={error} handleErrorClose={handleErrorClose} />

            <Container text style={{ padding: '2em 2em' }}>
                <Grid columns={1} container stackable>
                    <Grid.Column>
                        <Form.Field className={cronogramaTituloErro.length > 0 ? "error" : ""}>
                            <label>Título do cronograma</label>
                            <input
                                placeholder='Meu cronograma'
                                value={cronogramaTitulo}
                                maxLength={100}
                                onChange={(e) => handleTituloChange(e)} />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Field className={cronogramaDescricaoErro.length > 0 ? "error" : ""}>
                            <label>Descrição</label>
                            <input
                                placeholder='Breve descrição do cronograma'
                                value={cronogramaDescricao}
                                maxLength={100}
                                onChange={(e) => handleDescricaoChange(e)} />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Form.Field className={cronogramaDataInicioErro.length > 0 ? "error" : ""}>
                            <label>Data de início</label>
                            <div className="ui left icon input">
                                <input type="date"
                                    placeholder='Data inicial'
                                    onChange={(e) => handleDataInicioChange(e)}
                                    value={cronogramaDataInicio}
                                    min={dataMinima}
                                />
                                <i className="calendar alternate outline icon"></i>
                            </div>
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Form.Field className={cronogramaDataFimErro.length > 0 ? "error" : ""}>
                            <label>Data estimada do término</label>
                            <div className="ui left icon input">
                                <input type="date"
                                    placeholder='Data final'
                                    onChange={(e) => handleDataFimChange(e)}
                                    value={cronogramaDataFim}
                                    min={dataMinima}
                                />
                                <i className="calendar alternate outline icon"></i>
                            </div>
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column floated='right' mobile={16} tablet={6} computer={4}>
                        <Form.Field>
                            <Button
                                fluid
                                icon='check'
                                positive
                                labelPosition='right'
                                content='Salvar'
                            />
                        </Form.Field>
                    </Grid.Column>
                </Grid>
            </Container>
        </Form >
    )
}