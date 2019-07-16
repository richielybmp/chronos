import React, { useState } from 'react'
import { ReactNodeLike } from 'prop-types';
import { Container, Header, Segment, Grid, Button } from 'semantic-ui-react';
import { Cronograma } from 'chronos-core';
import NewDisciplinaFormContainer from '../../../containers/NewDisciplinaFormContainer';

interface CronogramaContentProps {
    children: ReactNodeLike,
    cronograma: Cronograma,
}

export function CronogramaContent({ children, cronograma }: CronogramaContentProps) {
    const [novaDisciplina, setnovaDisciplina] = useState(false)

    const handleClose = () => {
        setnovaDisciplina(false)
    }

    return (
        <Container style={{ padding: '2em 0em' }}>
            <Header as='h1' dividing>
                <Header.Content>
                    {cronograma.titulo.toUpperCase()}
                    <Header.Subheader>
                        {cronograma.dataInicio} - {cronograma.dataFim}
                    </Header.Subheader>
                </Header.Content>
            </Header>
            {cronograma.disciplinas.length > 0 && !novaDisciplina ?
                <Segment basic>
                    <Grid columns={1}>
                        <Grid.Column mobile={16} tablet={6} computer={3} floated='right'>
                            <Button fluid onClick={() => setnovaDisciplina(true)}
                                color='green' content='Disicplina' icon='plus' size='tiny'
                                labelPosition='right' />
                        </Grid.Column>
                    </Grid>
                </Segment>
                :
                null
            }
            {novaDisciplina ? <>
                <NewDisciplinaFormContainer close={handleClose} />
                <br />
            </>
                :
                null}

            {children}
        </Container>
    )
}
