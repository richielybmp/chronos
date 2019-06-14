import React from 'react'
import { Button, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Cronograma, CronogramaStateType } from 'core';
import { connect } from 'react-redux';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';

interface Props {
    match: any,
    cronograma: any,
}

export const CronogramaDetail = (props: Props) => {
    const hasValue = props.cronograma.cronograma != null

    if (hasValue) {
        const { codigo, descricao } = props.cronograma.cronograma
        return (
            <>
                <Button as={Link} to={`../cronogramas`}>
                    Home Cronogramas
                    </Button>
                <Header as='h3' dividing>
                    {descricao}
                </Header>
                <Segment vertical>
                    {codigo}
                </Segment>
            </>
        )
    }
    else {
        return (
            <EmptyHeader
                icon='warning'
                title='Algo de estranho aconteceu'
                subtitle='Tente voltar para sua lista de cronogramas'
                btnTitle='Voltar'
                linkTo={`/cronogramas`} />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        cronograma: state.cronogramas.cronogramaOnDetail
    }
};
const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CronogramaDetail);
