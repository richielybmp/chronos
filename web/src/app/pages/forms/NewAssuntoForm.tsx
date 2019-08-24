import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Grid } from 'semantic-ui-react';
import { Assunto, AssuntoState } from 'chronos-core';
import { PortalError } from '../../shared/components';

interface Props {
    assuntoOnDetail: AssuntoState,
    idDisciplina: string,
    history: any,
    close: () => void,
    createAssunto: (assunto: Assunto) => void,
    editAssunto: (data: any) => void
    clearError: () => void,
}

const NewAssuntoForm = (props: Props) => {

    const { createAssunto, idDisciplina } = props;
    const { assunto, error } = props.assuntoOnDetail;

    //#region States
    const [assuntoDescricao, setAssuntoDescricao] = useState('')
    const [assuntoDescricaoErro, setAssuntoDescricaoErro] = useState('')
    const [ehEdicao, setEhEdicao] = useState(false)
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

        if (assuntoDescricao === '') {
            setAssuntoDescricao("Descrição do assunto obrigatório.")
            inconsistente = true
        }
        return inconsistente;
    }

    const handleCreateAssunto = (e: any) => {
        e.preventDefault();
        if (!validaCampos()) {
            if (!ehEdicao) {
                var novo_assunto = new Assunto("", idDisciplina, assuntoDescricao)
                createAssunto(novo_assunto)
            }
            else if (assunto) {
                const id = assunto.uuid
                // TODO: MUDAR O UPDATE
                var obj = new Assunto(id, assunto.disciplina_uuid, assunto.descricao)
                props.editAssunto(obj)
                props.close()
            }
        }
    }
    //#endregion

    useEffect(() => {
        const { assunto } = props.assuntoOnDetail
        if (idDisciplina !== "" && assunto) {
            setAssuntoDescricao(assunto.descricao)
            setEhEdicao(true)
        }
    }, [props.assuntoOnDetail])

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