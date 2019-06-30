import React, { useEffect, useState } from 'react'
import { Button, Container, Grid } from 'semantic-ui-react';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';
import { Cronograma, CronogramasState } from 'chronos-core';
import ModalNovoCronograma from './modal/ModalNovoCronograma';
import { CronogramaCard, LoaderComponent, CronogramaListComponent } from '../shared/components';

interface Props {
    cronogramaList: CronogramasState;
    match: any,
    history: any,
    fetchCronogramas: () => void
    fetchCronograma: (id: string) => void,
}

function CronogramaList(props: Props) {

    const [modalShowToggle, setmodalShowToggle] = useState(false)

    const { cronogramas, loading } = props.cronogramaList

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

            <CronogramaListComponent
                cronogramas={cronogramas}
                handleCronogramaOnDetail={handleCronogramaOnDetail}
                handlePopModal={handlePopModal} />
            }

        </div>
    )
}

export default CronogramaList