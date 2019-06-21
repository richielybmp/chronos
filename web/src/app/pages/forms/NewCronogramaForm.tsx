import React, { useState, useEffect } from 'react'
import { Form, Button, Grid, Container, Input } from 'semantic-ui-react';
import { Cronograma, CronogramaState } from 'core';
import uuid from 'uuid';
import LoaderComponent from '../../shared/components/loader/LoaderComponent';

interface Props {
    novoCronograma: CronogramaState,
    cronogramaOnDetail: CronogramaState,
    history: any,
    createCronograma: (data: any, jwtToken: any) => void,
    editCronograma: (data: any, jwtToken: any) => void,
    resetMe: () => void,
    close: () => void,
}

export const NewCronogramaForm = (props: Props) => {

    const { cronograma, error, loading } = props.novoCronograma

    //#region 'States'
    const [cronogramaTitulo, setNovoCronogramaTitulo] = useState('')
    const [cronogramaDataInicio, setNovoCronogramaDataInicio] = useState('')
    const [cronogramaDataFim, setNovoCronogramaDataFim] = useState('')
    const [ehEdicao, setEhEdicao] = useState(false)
    //#endregion

    //#region 'Handles'
    const handleTituloChange = (e: any) => {
        setNovoCronogramaTitulo(e.target.value)
    }

    const handleDataInicioChange = (e: any) => {
        setNovoCronogramaDataInicio(e.target.value)
    }

    const handleDataFimChange = (e: any) => {
        setNovoCronogramaDataFim(e.target.value)
    }
    //#endregion

    const addCronograma = (e: any, dispatch: any) => {
        e.preventDefault();
        const c = new Cronograma(uuid(), cronogramaTitulo, new Date(cronogramaDataInicio), new Date(cronogramaDataFim), []);

        if (!ehEdicao) {
            props.createCronograma(c, sessionStorage.getItem('AuthToken'))
        }
        else {
            props.editCronograma(c, sessionStorage.getItem('AuthToken'))
            props.close()
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
            const { cronograma, error, loading } = props.cronogramaOnDetail
            setNovoCronogramaTitulo(cronograma.descricao)
            setNovoCronogramaDataInicio(cronograma.dataInicio.toISOString().slice(0, 10))
            setNovoCronogramaDataFim(cronograma.dataFim.toISOString().slice(0, 10))
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

    return (
        <Form onSubmit={(e: any, dispatch: any) => addCronograma(e, dispatch)}>
            <Container text style={{ padding: '2em 2em' }}>
                <Grid columns={1} container stackable>
                    <Grid.Column>
                        <Form.Field>
                            <label>Título do cronograma</label>
                            <input
                                placeholder='Meu cronograma'
                                value={cronogramaTitulo}
                                onChange={(e) => handleTituloChange(e)} />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Form.Field>
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
                        <Form.Field>
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