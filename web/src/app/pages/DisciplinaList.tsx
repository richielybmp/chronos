import React, { useState } from 'react'
import { Disciplina } from 'chronos-core';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';
import { DisciplinaTab } from '../shared/components';
import NewDisciplinaFormContainer from '../containers/NewDisciplinaFormContainer';

interface Props {
    disciplinas: Disciplina[],
    matchUrl: any,
    history: any
}

function DisciplinaList(props: Props) {
    const { disciplinas, matchUrl } = props
    const hasDisciplinas = disciplinas.length > 0

    const [novaDisciplina, setnovaDisciplina] = useState(false)

    const handleClose = () => {
        setnovaDisciplina(false)
    }

    if (!hasDisciplinas && !novaDisciplina) {
        return (
            <EmptyHeader
                icon='table'
                title='Você ainda não possui nenhuma Disciplina criada'
                subtitle='Adicione disciplinas para podermos começar!'
                btnTitle="Nova disicplina"
                onClick={() => setnovaDisciplina(true)}
            />
        )
    }

    if (novaDisciplina) {
        return (
            <NewDisciplinaFormContainer close={handleClose} />
        )
    }

    return (
        <DisciplinaTab disciplinas={disciplinas} matchUrl={matchUrl} />
    )
}

export default DisciplinaList