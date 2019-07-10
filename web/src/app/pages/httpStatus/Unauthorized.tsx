import React from 'react'
import { Header, Icon, Button, Container, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Unauthorized() {
    return (
        <Container text>
            <Header as='h2' icon textAlign='center'>
                <Icon name='exclamation triangle' circular />
                <Header.Content>Oops! Sua sessão expirou!</Header.Content>
            </Header>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column textAlign='center'>

                        <Button primary size='huge' as={Link} to={`${process.env.PUBLIC_URL}/entrar`}>
                            Entrar novamente
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}
