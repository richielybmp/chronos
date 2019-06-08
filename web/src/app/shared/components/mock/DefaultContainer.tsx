import React from 'react'
import { Container, Image } from 'semantic-ui-react';

function DefaultContainer() {
    return (
        <Container text style={{ marginTop: '7em' }}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        </Container>
    )
}

export default DefaultContainer
