import React from 'react'
import { Form, Container, Button } from 'semantic-ui-react';

interface Props {
    history: any,
}

const NewDisciplinaForm = (props: Props) => {
    return (
        <>
            <Button onClick={() => props.history.goBack()}>
                Voltar para o cronograma
            </Button>
            <Form>
                <Container text style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                    Form NewDisciplinaForm
            </Container>
            </Form>
        </>
    )
}

export default NewDisciplinaForm