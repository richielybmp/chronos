import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react'
import bgimage from '../../../../assets/images/study-login-bg.png'
import { Link } from 'react-router-dom';

interface LoginFormProps {
    isSignIn: boolean,
    logo: string,
    title: string,
    labelBtnEntrar: string,
    labelConvite: string,
    actionButton: (name: string, email: string, password: string) => void,
}

export function LoginForm({ isSignIn, logo, title, labelBtnEntrar, labelConvite, actionButton }: LoginFormProps) {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const url = isSignIn ? 'cadastrar' : 'entrar'

    //#region 'Handles'
    const handleNameChange = (e: any) => {
        setNameError('')
        setName(e.target.value)
    }

    const handleEmailChange = (e: any) => {
        setEmailError('')
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: any) => {
        setPasswordError('')
        setPassword(e.target.value)
    }
    //#endregion

    const validaCampos = () => {
        let inconsistente = false;
        setNameError('')
        setEmailError('')
        setPasswordError('')

        if (!isSignIn) {
            if (name.length <= 2) {
                setNameError('O nome deve possuir 2 ou mais caracteres.');
                inconsistente = true
            }
        }

        const regex_mail = new RegExp('[a-zA-Z0-9!#$%&amp;\'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*')
        if (!regex_mail.test(email)) {
            setEmailError('Por favor, entre com um endereço de email no formato correto.');
            inconsistente = true
        }

        if (password.length <= 5) {
            setPasswordError('A senha deve possuir 6 ou mais caracteres.');
            inconsistente = true
        }

        return inconsistente;
    }

    const validadeAndLogin = () => {
        if (!validaCampos())
            actionButton(name, email, password)
    }

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
                        {!isSignIn ?
                            (<>

                                {nameError.length > 0 ?
                                    <div color='red' className="ui pointing below prompt label">{nameError}</div> : null
                                }
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Nome'
                                    value={name}
                                    onChange={(e) => handleNameChange(e)}
                                />
                            </>

                            ) : null
                        }


                        {emailError ?
                            <div color='red' className="ui pointing below prompt label">{emailError}</div> : null
                        }
                        <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail'
                            value={email}
                            onChange={(e) => handleEmailChange(e)}
                        />

                        {passwordError ?
                            <div color='red' className="ui pointing below prompt label">{passwordError}</div> : null
                        }
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Senha'
                            type='password'
                            value={password}
                            onChange={(e) => handlePasswordChange(e)}
                        />

                        <Button
                            color='teal'
                            fluid
                            size='large'
                            onClick={() => validadeAndLogin()}
                        >

                            {labelBtnEntrar}
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    <Header color='grey' as={Link} to={`${process.env.PUBLIC_URL}/${url}`}>
                        {labelConvite}
                    </Header>
                </Message>
                <Header
                    color='blue'
                    textAlign='center'
                    style={{ textDecoration: 'underline' }}
                    as={Link}
                    to={`${process.env.PUBLIC_URL}/`}>
                    Chronos
                </Header>
            </Grid.Column>
        </Grid>
    )
}