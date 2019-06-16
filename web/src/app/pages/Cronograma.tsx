import React from 'react'
import { Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';
import { CronogramaState } from 'core';
import LoaderComponent from '../shared/components/loader/LoaderComponent';
import DisciplinaListContainer from '../containers/DisciplinaListContainer';

interface Props {
    match: any,
    cronogramaOnDetail: CronogramaState,
}

const CronogramaDetail = (props: Props) => {

    const { cronograma, loading } = props.cronogramaOnDetail

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }
    return (
        <>
            {cronograma != null ? (
                <>
                    <Button as={Link} to={`../cronogramas`}>
                        Voltar para a lista de Cronogramas
                    </Button>
                    <Header as='h3' dividing>
                        {cronograma.descricao}
                    </Header>
                    <Header as='h3' >
                        {cronograma.codigo}
                    </Header>
                    <Header as='h3' >
                        {cronograma.dataInicio.toString()}
                    </Header>

                    <DisciplinaListContainer disciplinas={cronograma.disciplinas} matchUrl={props.match} />
                </>)
                :
                <EmptyHeader
                    icon='warning'
                    title='Algo de estranho aconteceu'
                    subtitle='Tente voltar para sua lista de cronogramas'
                    btnTitle='Voltar'
                    linkTo={`/cronogramas`} />
            }
        </>
    )
}

export default CronogramaDetail;