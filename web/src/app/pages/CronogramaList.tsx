import React, { useEffect, useState } from 'react'
import { Button, Container, Grid } from 'semantic-ui-react';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';
import { Cronograma, CronogramasState } from 'chronos-core';
import ModalNovoCronograma from './modal/ModalNovoCronograma';
import { CronogramaCard, LoaderComponent } from '../shared/components';

interface Props {
    cronogramaList: CronogramasState;
    match: any,
    history: any,
    fetchCronogramas: () => void
    fetchCronograma: (id: string) => void,
}

function CronogramaList(props: Props) {

    const [modalShowToggle, setmodalShowToggle] = useState(false)

    const { cronogramas, loading, error } = props.cronogramaList

    const hasCronogramas = cronogramas.length > 0;

    useEffect(() => {
        props.fetchCronogramas()
    }, [])

    //#region 'Handles'
    const handleCronogramaOnDetail = (id: string) => {
        props.fetchCronograma(id)
    }

    const handlePopModal = () => {
        setmodalShowToggle(!modalShowToggle)
    }

    const handleCloseModal = () => {
        setmodalShowToggle(false)
    }
    //#endregion

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    return (
        <div style={{ height: '-webkit-fill-available' }}>
            <ModalNovoCronograma
                history={props.history}
                show={modalShowToggle}
                toggle={() => handlePopModal()}
                close={() => handleCloseModal()} />

            {hasCronogramas ? (
                <Container fluid style={{ padding: '1em 1em' }}>
                    <Grid columns={4}>
                        <Grid.Row>
                            <Grid.Column mobile={16} tablet={6} computer={4} >
                                <Button fluid size='large' color='green' content='Criar cronograma' icon='plus' labelPosition='right' onClick={() => handlePopModal()} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid columns={6}>
                        {/* <Card.Group> */}
                        {cronogramas.map((item: Cronograma, index: number) => {
                            return (
                                <Grid.Column mobile={16} key={index} >
                                    <CronogramaCard
                                        cronograma={item}
                                        setOnDetail={() => {
                                            return handleCronogramaOnDetail(item.codigo);
                                        }}
                                    />
                                </Grid.Column>
                            )
                        })}
                        {/* </Card.Group> */}
                    </Grid>
                </Container>)
                :
                <EmptyHeader
                    icon='table'
                    title='Você ainda não possui nenhum cronograma'
                    subtitle='Comece criando seu primeiro plano de estudos.'
                    btnTitle="Novo cronograma"
                    onClick={() => handlePopModal()} />
            }

        </div>
    )
}

export default CronogramaList