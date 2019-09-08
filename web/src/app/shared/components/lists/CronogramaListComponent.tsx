import React from 'react'
import { Cronograma } from 'chronos-core';
import { Container, Grid, Button } from 'semantic-ui-react';
import { CronogramaCard, EmptyHeader } from '..';

interface CronogramaListComponentProps {
    cronogramas: Cronograma[],
    handlePopModal: () => void
    handleCronogramaOnDetail: (value: string) => void
}

export const CronogramaListComponent = (props: CronogramaListComponentProps) => {

    const { cronogramas, handlePopModal, handleCronogramaOnDetail } = props

    const hasCronogramas = cronogramas.length > 0;

    return (
        <div>
            <Container fluid style={{ padding: '1em 1em' }}>

                {hasCronogramas ? (
                    <>
                        <Grid columns={4}>
                            <Grid.Row>
                                <Grid.Column mobile={16} tablet={6} computer={4} >
                                    <Button
                                        fluid
                                        size='large'
                                        color='green'
                                        content='Criar cronograma'
                                        icon='plus'
                                        labelPosition='right'
                                        onClick={() => handlePopModal()} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                        <Grid columns={2}>
                            {cronogramas.map((item: Cronograma, index: number) => {
                                return (
                                    <Grid.Column mobile={16} computer={8} key={index} >
                                        <CronogramaCard
                                            cronograma={item}
                                            setOnDetail={() => {
                                                return handleCronogramaOnDetail(item.uuid);
                                            }}
                                        />
                                    </Grid.Column>
                                )
                            })}
                        </Grid>
                    </>
                )
                    :
                    <EmptyHeader
                        icon='book'
                        title='Você ainda não possui nenhum cronograma'
                        subtitle='Comece criando seu primeiro plano de estudos.'
                        btnTitle="Novo cronograma"
                        onClick={() => handlePopModal()} />
                }
            </Container>
        </div>
    )
}

export default CronogramaListComponent
