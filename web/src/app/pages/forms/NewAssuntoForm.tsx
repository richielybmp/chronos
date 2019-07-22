import React, { useState } from 'react'
import { Form, Button, Container, Grid } from 'semantic-ui-react';
import { CronogramaState, Assunto } from 'chronos-core';
import { PortalError } from '../../shared/components';

interface Props {
    cronogramaOnDetail: CronogramaState,
    idOnDetail: string,
    createAssunto: (assunto: Assunto) => void,
    clearError: () => void,
}

const NewAssuntoForm = (props: Props) => {

    const { createAssunto, idOnDetail } = props;
    const { cronograma, error } = props.cronogramaOnDetail;

    //#region States
    const [assuntoDescricao, setAssuntoDescricao] = useState('')
    const [assuntoDescricaoErro, setAssuntoDescricaoErro] = useState('')
    //#endregion

    // #region Handles
    const handleTituloChange = (e: any) => {
        setAssuntoDescricaoErro('')
        setAssuntoDescricao(e.target.value)
    }

    const handleErrorClose = () => {
        props.clearError()
    }

    const validaCampos = () => {
        let inconsistente = false;
        setAssuntoDescricaoErro('')

        if (assuntoDescricao == '') {
            setAssuntoDescricao("Descrição do assunto obrigatório.")
            inconsistente = true
        }
        return inconsistente;
    }

    const handleCreateAssunto = (e: any) => {
        e.preventDefault();
        if (!validaCampos() && cronograma) {
            var assunto = new Assunto("", idOnDetail, assuntoDescricao, [], [], [], "")
            createAssunto(assunto)
        }
    }
    //#endregion

    return (
        <Form onSubmit={(e: any) => handleCreateAssunto(e)}>
            <PortalError error={error} handleErrorClose={handleErrorClose} />
            <Container text style={{ padding: '2em 2em' }}>
                <Grid columns={1} container stackable>
                    <Grid.Column>
                        <Form.Field className={assuntoDescricaoErro.length > 0 ? "error" : ""}>
                            <label>Assunto</label>
                            <input
                                placeholder='Assunto'
                                value={assuntoDescricao}
                                onChange={(e) => handleTituloChange(e)} />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column floated='right' mobile={16} tablet={6} computer={4}>
                        <Form.Field>
                            <Button
                                fluid
                                icon='check'
                                positive
                                labelPosition='right'
                                content="Salvar"
                            />
                        </Form.Field>
                    </Grid.Column>
                </Grid>
            </Container>
        </Form>
    )
}

export default NewAssuntoForm