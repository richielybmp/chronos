import React, { useState, useEffect } from 'react'
import { Form, Button, Grid, Container, Input, Portal, Segment, Header } from 'semantic-ui-react';
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
        console.log(e.target.value)
        setNovoCronogramaDataInicio(e.target.value)
    }

    const handleDataFimChange = (e: any) => {
        setNovoCronogramaDataFimErro('')
        console.log(e.target.value)
        setNovoCronogramaDataFim(e.target.value)
    }
    //#endregion

    const validaCampos = () => {
        let inconsistente = false;
        setNovoCronogramaTituloErro('')
        setNovoCronogramaDescricaoErro('')
        setNovoCronogramaDataInicioErro('')
        setNovoCronogramaDataFimErro('')

        if (cronogramaTitulo == '') {
            setNovoCronogramaTituloErro("Título do cronograma obrigatório.")
            inconsistente = true
        }
        if (cronogramaDescricao == '') {
            setNovoCronogramaDescricaoErro("Descrição do cronograma obrigatório.")
            inconsistente = true
        }
        if (cronogramaDataInicio == '') {
            setNovoCronogramaDataInicioErro('Data início do cronograma obrigatório.')
            inconsistente = true
        }
        if (cronogramaDataFim == '') {
            setNovoCronogramaDataFimErro('Data fim do cronograma obrigatório.')
            inconsistente = true
        }
        return inconsistente;
    }

    const addCronograma = (e: any, dispatch: any) => {
        e.preventDefault();

        if (!validaCampos()) {
            if (!ehEdicao) {
                var obj = new Cronograma('', cronogramaTitulo, cronogramaDescricao, cronogramaDataInicio, cronogramaDataFim, []);
                props.createCronograma(obj)
            }
            else {
                if (props.cronogramaOnDetail.cronograma != null) {
                    const id = props.cronogramaOnDetail.cronograma.codigo
                    var obj = new Cronograma(id, cronogramaTitulo, cronogramaDescricao, cronogramaDataInicio, cronogramaDataFim, []);
                    props.editCronograma(obj)
                    props.close()
                }
            }
        }
    }

    //#region 'Effects'
    useEffect(() => {
        if (cronograma && !error) {
            props.close()
        }
    })

    useEffect(() => {
        if (props.cronogramaOnDetail.cronograma != null) {
            const { cronograma } = props.cronogramaOnDetail
            const dateI = cronograma.dataInicio.split(' ')[0].split('-')
            const dateF = cronograma.dataFim.split(' ')[0].split('-')

            setNovoCronogramaDataInicio(dateI[0] + "-" + dateI[1] + "-" + dateI[2])
            setNovoCronogramaDataFim(dateF[0] + "-" + dateF[1] + "-" + dateF[2])
            setNovoCronogramaTitulo(cronograma.titulo)
            setNovoCronogramaDescricao(cronograma.descricao)
            setEhEdicao(true)
        }
    }, [props.cronogramaOnDetail])

    useEffect(() => {
        return () => {
            props.resetMe()
        };
    }, []);
    //#endregion

    if (loading) {
        return (<Container style={{ padding: '5em 1em' }}>
            <LoaderComponent tamanho='big' titulo="Carregando" />
        </Container>)
    }

    const handleErrorClose = () => {
        props.clearError()
    }

    return (
        <Form onSubmit={(e: any, dispatch: any) => addCronograma(e, dispatch)}>

            <PortalError error={error} handleErrorClose={handleErrorClose} />

            <Container text style={{ padding: '2em 2em' }}>
                <Grid columns={1} container stackable>
                    <Grid.Column>
                        <Form.Field className={cronogramaTituloErro.length > 0 ? "error" : ""}>
                            <label>Título do cronograma</label>
                            <input
                                placeholder='Meu cronograma'
                                value={cronogramaTitulo}
                                onChange={(e) => handleTituloChange(e)} />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Field className={cronogramaDescricaoErro.length > 0 ? "error" : ""}>
                            <label>Descrição</label>
                            <input
                                placeholder='Breve descrição do cronograma'
                                value={cronogramaDescricao}
                                onChange={(e) => handleDescricaoChange(e)} />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Form.Field className={cronogramaDataInicioErro.length > 0 ? "error" : ""}>
                            <label>Data de início</label>
                            <Input
                                type="date"
                                icon='calendar alternate outline'
                                iconPosition='left'
                                placeholder='Data final'
                                defaultValue={cronogramaDataInicio}
                                onChange={(e) => handleDataInicioChange(e)}
                            />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Form.Field className={cronogramaDataFimErro.length > 0 ? "error" : ""}>
                            <label>Data estimada do término</label>
                            <Input
                                type="date"
                                icon='calendar alternate outline'
                                iconPosition='left'
                                placeholder='Data final'
                                defaultValue={cronogramaDataFim}
                                onChange={(e) => handleDataFimChange(e)}
                            />
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