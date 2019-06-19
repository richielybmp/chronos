import React, { useState, useEffect } from 'react'
import { Form, Button, Grid, Container, Input } from 'semantic-ui-react';
import { Cronograma, CronogramaState } from 'core';
import uuid from 'uuid';
import LoaderComponent from '../../shared/components/loader/LoaderComponent';

interface Props {
    novoCronograma: CronogramaState,
    history: any,
    createCronograma: (data: any, jwtToken: any) => void,
    resetMe: () => void,
    toggle: () => void,
}

export const NewCronogramaForm = (props: Props) => {

    const { cronograma, error, loading } = props.novoCronograma

    //#region 'States'
    const [cronogramaTitulo, setNovoCronogramaTitulo] = useState('')
    const [cronogramaDataInicio, setNovoCronogramaDataInicio] = useState('')
    const [cronogramaDataFim, setNovoCronogramaDataFim] = useState('')
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
        props.createCronograma(c, sessionStorage.getItem('AuthToken'))
    }

    //#region 'Effects'
    useEffect(() => {
        if (cronograma && !error) {
            //props.history.push(`${process.env.PUBLIC_URL}/cronogramas`);
            props.toggle()
        }
    })

    useEffect(() => {
        return () => {
            props.resetMe()
        };
    }, []);
    //#endregion

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    return (
        <Form onSubmit={(e: any, dispatch: any) => addCronograma(e, dispatch)}>
            <Container text style={{ padding: '5em 0em' }}>
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
                            <label>Título do cronograma</label>
                            <Input
                                type="date"
                                icon='calendar alternate outline'
                                iconPosition='left'
                                placeholder='Data início'
                                onChange={(e) => handleDataInicioChange(e)}
                            />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Form.Field>
                            <label>Título do cronograma</label>
                            <Input
                                type="date"
                                icon='calendar alternate outline'
                                iconPosition='left'
                                placeholder='Data final'
                                onChange={(e) => handleDataFimChange(e)}
                            />
                        </Form.Field>
                    </Grid.Column>

                    <Button
                        type='submit'
                    >Salvar
                    </Button>
                </Grid>
            </Container>
        </Form >
    )
}