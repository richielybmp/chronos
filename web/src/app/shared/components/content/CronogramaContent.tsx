import React from 'react'
import { ReactNodeLike } from 'prop-types';
import { Container, Header, Segment, Grid, Button, Label } from 'semantic-ui-react';
import DisciplinaListContainer from '../../../containers/DisciplinaListContainer';
import { Cronograma } from 'chronos-core';

interface CronogramaContentProps {
    children: ReactNodeLike,
    cronograma: Cronograma,
}

export function CronogramaContent({ children, cronograma }: CronogramaContentProps) {
    return (
        <Container style={{ padding: '2em 0em' }}>
            <Header as='h1' dividing>
                <Header.Content  >
                    {cronograma.descricao}
                    <Header.Subheader>
                        {cronograma.dataInicio} - {cronograma.dataFim}
                    </Header.Subheader>
                </Header.Content>
            </Header>
            <Segment basic>
                <Grid columns={1}>
                    <Grid.Column mobile={16} tablet={6} computer={3} floated='right'>
                        <Button fluid onClick={() => alert('Not implemented yet')}
                            color='green' content='Disicplina' icon='plus' size='tiny'
                            labelPosition='right' />
                    </Grid.Column>
                </Grid>
            </Segment>
            {children}
        </Container>
    )
}
