import React from 'react'
import { Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HomePageHeading = ({ mobile }: any) => (
    <Container text>
        <Header
            as='h1'
            content='CHRONOS'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Melhore seus estudos seguindo seus cronogramas.'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <Button primary size='huge' as={Link} to={`${process.env.PUBLIC_URL}/entrar`}>
            Começar
        </Button>
    </Container>
)

export default HomePageHeading
