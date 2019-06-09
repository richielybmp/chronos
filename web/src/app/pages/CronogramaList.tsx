import React from 'react'
import { Card, Button } from 'semantic-ui-react';
import { Cronograma, ChronosState, cronogramasSelector, setOnDetailAction } from 'core';
import { connect } from 'react-redux';
import CronogramaCard from '../shared/components/cards/CronogramaCard';
import { Link } from 'react-router-dom';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';

interface Props {
    cronogramas: Cronograma[];
    match: any,
    setOnDetailAction: (id: string) => void,
}

export const CronogramaList = (props: Props) => {


    const handleCronogramaOnDetail = (id: string) => {
        props.setOnDetailAction(id);
    }

    const hasCronogramas = props.cronogramas.length > 0;
    return (
        <>
            {hasCronogramas ? (
                <>
                    <Button
                        size='large'
                        color='blue'
                        as={Link}
                        to={`${props.match.url}/novo-cronograma`}
                    >
                        Novo Cronograma
                    </Button>

                    <Card.Group>
                        {props.cronogramas.map((item, index) => {
                            return (
                                <CronogramaCard
                                    key={index}
                                    cronograma={item}
                                    setOnDetail={() => {
                                        return handleCronogramaOnDetail(item.codigo);
                                    }}
                                />
                            )
                        })}
                    </Card.Group>
                </>)
                :
                <EmptyHeader
                    icon='table'
                    title='Você ainda não possui nenhum cronograma'
                    subtitle='Comece criando seu primeiro plano de estudos.'
                    btnTitle="Novo cronograma"
                    linkTo={`${props.match.url}/novo-cronograma`} />
            }

        </>
    )
}

const mapStateToProps = (state: ChronosState) => ({
    cronogramas: cronogramasSelector(state.cronogramas),
});

const mapDispatchToProps = {
    setOnDetailAction: setOnDetailAction,
    match: {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CronogramaList);