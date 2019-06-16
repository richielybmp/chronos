import React from 'react'
import { Dimmer, Loader, SemanticSIZES } from 'semantic-ui-react';

interface LoaderProps {
    tamanho: SemanticSIZES,
    titulo: string,
}

export default function LoaderComponent(props: LoaderProps) {

    const { tamanho, titulo } = props

    return (
        <Dimmer active inverted>
            <Loader size={tamanho}>{titulo}</Loader>
        </Dimmer>
    )
}
