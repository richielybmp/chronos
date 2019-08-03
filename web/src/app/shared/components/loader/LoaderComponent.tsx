import React from 'react'
import { Dimmer, Loader, SemanticSIZES } from 'semantic-ui-react';

interface LoaderProps {
    tamanho: SemanticSIZES,
    titulo: string,
}

export function LoaderComponent(props: LoaderProps) {

    const { tamanho, titulo } = props

    return (
        <Dimmer active inverted>
            <Loader inverted size={tamanho}>{titulo}</Loader>
        </Dimmer>
    )
}
