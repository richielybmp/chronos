import React, { useEffect } from 'react'
import { Card, Button, Dimmer, Loader } from 'semantic-ui-react';
import CronogramaCard from '../shared/components/cards/CronogramaCard';
import { Link } from 'react-router-dom';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';
import { CronogramaState, Cronograma } from 'core';

interface Props {
    cronogramaList: CronogramaState;
    match: any,
    fetchCronogramas: () => void
    fetchCronograma: (id: string) => void,
}

const CronogramaList = (props: Props) => {

    const { cronogramas, loading } = props.cronogramaList
    const hasCronogramas = cronogramas.length > 0;

    const handleCronogramaOnDetail = (id: string) => {
        props.fetchCronograma(id)
    }

    useEffect(() => {
        props.fetchCronogramas()
    }, [])


    if (loading) {
        return <Dimmer active inverted>
            <Loader size='mini'>Loading</Loader>
        </Dimmer>
    }

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
                        {cronogramas.map((item: Cronograma, index) => {
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

export default CronogramaList