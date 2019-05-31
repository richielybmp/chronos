import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const LoginForm = () => (
    <Grid textAlign='center' verticalAlign='middle' style={{
        backgroundImage: "url(" + "https://www.pixelstalk.net/wp-content/uploads/2016/11/Education-Wallpapers-HD-Free-Download.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    }}>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='https://react.semantic-ui.com/logo.png' /> Log-in to your account
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button
                        color='teal'
                        fluid
                        size='large'
                        as={Link}
                        to={`${process.env.PUBLIC_URL}/cronograma`}>
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                New to us?
            </Message>
        </Grid.Column>
    </Grid>
)

export default LoginForm