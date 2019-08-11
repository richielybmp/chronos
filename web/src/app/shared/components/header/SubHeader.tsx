import React from 'react'
import { Header } from 'semantic-ui-react';

interface SubHeaderProps {
    content: string,
}

export function SubHeader(props: SubHeaderProps) {
    return (
        <Header as='h2' icon textAlign='center' style={{ backgroundColor: '#dbdbdb', marginTop: '-15px', heigh: '50px' }}>
            <Header.Content style={{ margin: '0', padding: '10px' }}>{props.content}</Header.Content>
        </Header>
    )
}