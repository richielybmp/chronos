import React from 'react'
import { Card, Button, Header, Icon } from 'semantic-ui-react';
import { Cronograma, ChronosState, addCronogramaAction, chronosSelector } from 'core';
import { connect } from 'react-redux';
import CronogramaCard from '../shared/components/cards/CronogramaCard';
import { Link } from 'react-router-dom';

interface Props {
    cronogramas: Cronograma[];
    match: any,
}

export const CronogramaList = (props: Props) => {

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
                            console.log(index, item)
                            return (
                                <CronogramaCard key={index} cronograma={item} />
                            )
                        })}
                    </Card.Group>
                </>)
                :
                <Header as='h2' icon textAlign='center'>
                    <Icon name='settings' />
                    Você ainda não possui nenhum cronograma
                    <Header.Subheader>Comece criando seu primeiro plano de estudos.</Header.Subheader>
                    <br />
                    <Button
                        as={Link}
                        to={`${props.match.url}/novo-cronograma`}
                        size='large'
                        color='blue'
                    // onClick={addCronograma}
                    >
                        Novo Cronograma
                    </Button>
                </Header>
            }

        </>
    )
}

const mapStateToProps = (state: ChronosState) => ({
    cronogramas: chronosSelector(state),
});

const mapDispatchToProps = {
    addCronograma: addCronogramaAction,
    match: {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CronogramaList);