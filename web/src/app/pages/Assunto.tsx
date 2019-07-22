import React from 'react'
import { EmptyHeader } from '../shared/components';
import { Button } from 'semantic-ui-react';

interface Props {
    match: any,
    history: any,
}

const AssuntoDetail = (props: Props) => {
    console.log(props)
    return (
        <>
            <Button onClick={() => props.history.goBack()}>
                Voltar
            </Button>
            <EmptyHeader
                icon='table'
                title='Você ainda não possui nenhum artefato criado'
                subtitle='Adicione artefatos!'
                btnTitle="Novo artefato"
                onClick={() => alert('not implemented yet')}
            />
        </>
    )
}

export default AssuntoDetail;