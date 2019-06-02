import React from 'react'
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface DisciplinaCardProps {
    disciplina: {
        path: String,
        header: String,
        meta: String,
        descricao: String,
    }
}

function DisciplinaCard(props: DisciplinaCardProps) {

    const { path, header, meta, descricao } = props.disciplina

    return (
        <Card
            as={Link}
            to={path}
        >
            <Card.Content>
                <Card.Header content={header} />
                <Card.Meta content={meta} />
                <Card.Description content={descricao} />
            </Card.Content>
        </Card>
    )
}

export default DisciplinaCard
