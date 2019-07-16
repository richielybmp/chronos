import React from 'react'
import { Form, Button } from 'semantic-ui-react';

interface Props {
    // history: any,
    close: () => void,
    createDisciplina: (data: any) => void
}

const NewDisciplinaForm = (props: Props) => {

    const { close, createDisciplina } = props

    const handleCreateDisciplina = () => {
        createDisciplina({});
    }

    return (
        <Form>
            <Form.Field>
                <h1>Nome</h1>
                <input placeholder='Nova disciplina' />
            </Form.Field>
            <Button onClick={() => close()}>Cancelar</Button>
            <Button color='green' onClick={() => handleCreateDisciplina()}>Criar</Button>
        </Form>
    )
}

export default NewDisciplinaForm