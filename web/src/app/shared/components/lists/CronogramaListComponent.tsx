import React from 'react'
import { Container, Grid, Button } from 'semantic-ui-react';
import { Cronograma } from 'chronos-core';
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
            {hasCronogramas ? (
                <Container fluid style={{ padding: '1em 1em' }}>
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
                                            return handleCronogramaOnDetail(item.codigo);
                                        }}
                                    />
                                </Grid.Column>
                            )
                        })}
                    </Grid>
                </Container>)
                :
                <EmptyHeader
                    icon='book'
                    title='Você ainda não possui nenhum cronograma'
                    subtitle='Comece criando seu primeiro plano de estudos.'
                    btnTitle="Novo cronograma"
                    onClick={() => handlePopModal()} />
            }
        </div>
    )
}

export default CronogramaListComponent
