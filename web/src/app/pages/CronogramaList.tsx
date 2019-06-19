import React, { useEffect, useState } from 'react'
import { Card, Button } from 'semantic-ui-react';
import CronogramaCard from '../shared/components/cards/CronogramaCard';
import { Link } from 'react-router-dom';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';
import { Cronograma, CronogramasState } from 'core';
import LoaderComponent from '../shared/components/loader/LoaderComponent';
import ModalContainer from '../shared/components/modal/ModalContainer';
import NewCronogramaFormContainer from '../containers/NewCronogramaFormContainer';

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
    const hasCronogramas = cronogramas.length > 0;

    useEffect(() => {
        props.fetchCronogramas()
    }, [])

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    const handleCronogramaOnDetail = (id: string) => {
        props.fetchCronograma(id)
    }

    const handlePopModal = () => {
        setmodalShowToggle(!modalShowToggle)
    }

    const handleCloseModal = () => {
        setmodalShowToggle(false)
    }

    return (
        <>
            {hasCronogramas ? (
                <>
                    {/* as={Link} to={`${props.match.url}/novo-cronograma`} */}
                    <Button size='large' color='blue' onClick={() => handlePopModal()} >
                        Novo Cronograma
                    </Button>

                    <ModalContainer show={modalShowToggle} toggle={() => handlePopModal()}>
                        <NewCronogramaFormContainer history={props.history} toggle={() => handleCloseModal()} />
                    </ModalContainer>

                    <Card.Group>
                        {cronogramas.map((item: Cronograma, index: number) => {
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