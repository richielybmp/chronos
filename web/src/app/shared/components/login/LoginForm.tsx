import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import bgimage from '../../../../assets/images/study-login-bg.png'

interface LoginFormProps {
    logo: string,
    title: string,
    url: string
    labelBtnEntrar: string,
    labelConvite: string,
    actionLogin: () => void,
}

export function LoginForm({ logo, title, labelBtnEntrar, labelConvite, url, actionLogin }: LoginFormProps) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //#region 'Handles'
    const handleEmailChange = (e: any) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value)
    }
    //#endregion

    return (
        < Grid textAlign='center' verticalAlign='middle' style={{
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
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                            value={email}
                            onChange={(e) => handleEmailChange(e)}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={(e) => handlePasswordChange(e)}
                        />

                        <Button
                            color='teal'
                            fluid
                            size='large'
                            onClick={() => actionLogin()}
                        >

                            {labelBtnEntrar}
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    {labelConvite}
                </Message>
            </Grid.Column>
        </Grid >
    )
}