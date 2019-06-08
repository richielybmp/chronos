import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import bgimage from '../../../../assets/images/study-login-bg.png'

interface LoginFormProps {
    logo: string,
    title: string,
    url: string
    labelBtnEntrar: string,
    labelConvite: string,
}

const LoginForm = ({ logo, title, labelBtnEntrar, labelConvite, url }: LoginFormProps) => (
    <Grid textAlign='center' verticalAlign='middle' style={{
        backgroundImage: "url(" + bgimage + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    }}>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src={logo} /> {title}
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
                        to={url}>
                        {labelBtnEntrar}
                    </Button>
                </Segment>
            </Form>
            <Message>
                {labelConvite}
            </Message>
        </Grid.Column>
    </Grid>
)

export default LoginForm