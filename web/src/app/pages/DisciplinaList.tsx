import React, { useEffect } from 'react'
import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoaderComponent from '../shared/components/loader/LoaderComponent';
import { Disciplina } from 'core';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';


const DisciplinaList = ({ match }: any) => {

    return (
        <EmptyHeader
            icon='table'
            title='Você ainda não possui nenhuma Disciplina criada'
            subtitle='Adicione disciplinas para poder acompanhar.'
            btnTitle="Nova disicplina"
            linkTo={`/nova-disciplina`}
        />
    )
}

// interface Props {
//     disciplinaList: any;
//     match: any,
//     fetchDisciplinas: () => void
//     fetchDisciplina: (id: string) => void,
// }

// const DisciplinaList = (props: Props) => {
//     const { disciplinas, error, loading } = props.disciplinaList
//     //const hasDisciplinas = disciplinas.length > 0;
//     const hasDisciplinas = false

//     useEffect(() => {
//         props.fetchDisciplinas()
//     }, [])

//     if (loading) {
//         return <LoaderComponent tamanho='big' titulo="Carregando" />
//     }

//     return (
//         <>
//             {hasDisciplinas ? (
//                 <Card.Group>
//                     {disciplinas.map((item: Disciplina, index: number) => {
//                         return (<h1>Hello, it's me, Mario!</h1>)
//                     })}
//                 </Card.Group>
//             )
//                 :
//                 <EmptyHeader
//                     icon='table'
//                     title='Você ainda não possui nenhuma disciplina criada'
//                     subtitle='Adicione disciplinas para poder acompanhar.'
//                     btnTitle="Nova disicplina"
//                     linkTo={`${props.match.url}/nova-disciplina`} />
//             }

//         </>
//     )
// }

export default DisciplinaList