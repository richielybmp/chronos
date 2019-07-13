import React from 'react'
import { Disciplina } from 'chronos-core';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';
import { DisciplinaTab } from '../shared/components';

interface Props {
    disciplinas: Disciplina[],
    matchUrl: any,
}

const DisciplinaList = (props: Props) => {
    const { disciplinas, matchUrl } = props

    const hasDisciplinas = disciplinas.length > 0

    if (!hasDisciplinas) {
        return (
            <EmptyHeader
                icon='table'
                title='Você ainda não possui nenhuma Disciplina criada'
                subtitle='Adicione disciplinas para podermos começar!.'
                btnTitle="Nova disicplina"
                linkTo={`/nova-disciplina`}
            />
        )
    }

    return (
        <DisciplinaTab disciplinas={disciplinas} matchUrl={matchUrl} />
    )
}

export default DisciplinaList