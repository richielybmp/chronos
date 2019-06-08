import React, { useState } from 'react'
import { Form, Checkbox, Button } from 'semantic-ui-react';
import { Cronograma, addCronogramaAction, ChronosState } from 'core';
import { connect } from 'react-redux';
import uuid from 'uuid';

interface Props {
    addCronograma: (c: Cronograma) => void;
    history: any;
    match: any;
}

export const NewCronogramaForm = (props: Props) => {

    const [cronogramaDescricao, setNovoCronogramaDescricao] = useState('')

    const handleChange = (e: any) => {
        setNovoCronogramaDescricao(e.target.value)
    }

    const addCronograma = (e: any) => {
        e.preventDefault();
        const c = new Cronograma(uuid(), cronogramaDescricao, new Date(), new Date(), []);
        props.addCronograma(c)
        console.log(props.history);
        props.history.push(`${process.env.PUBLIC_URL}/cronogramas`);
    }

    return (
        <Form onSubmit={(e: any) => addCronograma(e)}>
            <Form.Field>
                <label>Nome</label>
                <input
                    placeholder='Meu cronograma'
                    value={cronogramaDescricao}
                    onChange={(e) => handleChange(e)} />
            </Form.Field>

            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button
                type='submit'
            >Salvar</Button>
        </Form>
    )
}

const mapStateToProps = (state: ChronosState) => ({
});

const mapDispatchToProps = {
    addCronograma: addCronogramaAction,
    history: null,
    match: null,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCronogramaForm);