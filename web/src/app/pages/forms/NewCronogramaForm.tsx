import React, { useState } from 'react'
import { Form, Button, Grid, Container, Input } from 'semantic-ui-react';
import { Cronograma, addCronogramaAction, ChronosState } from 'core';
import { connect } from 'react-redux';
import uuid from 'uuid';

interface Props {
    addCronograma: (c: Cronograma) => void;
    history: any;
    match: any;
}

export const NewCronogramaForm = (props: Props) => {

    const [cronogramaTitulo, setNovoCronogramaTitulo] = useState('')
    const [cronogramaDataInicio, setNovoCronogramaDataInicio] = useState('')
    const [cronogramaDataFim, setNovoCronogramaDataFim] = useState('')

    const handleTituloChange = (e: any) => {
        setNovoCronogramaTitulo(e.target.value)
    }

    const handleDataInicioChange = (e: any) => {
        setNovoCronogramaDataInicio(e.target.value)
    }

    const handleDataFimChange = (e: any) => {
        setNovoCronogramaDataFim(e.target.value)
    }

    const addCronograma = (e: any) => {
        e.preventDefault();
        const c = new Cronograma(uuid(), cronogramaTitulo, new Date(cronogramaDataInicio), new Date(cronogramaDataFim), []);
        props.addCronograma(c)
        props.history.push(`${process.env.PUBLIC_URL}/cronogramas`);
    }

    return (
        <Form onSubmit={(e: any) => addCronograma(e)}>
            <Container text style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
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
        </Form>
    )
}

const mapStateToProps = (state: ChronosState) => ({});

const mapDispatchToProps = {
    addCronograma: addCronogramaAction,
    history: null,
    match: null,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCronogramaForm);