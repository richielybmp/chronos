import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Label, Icon } from 'semantic-ui-react'
import bgimage from '../../../../assets/images/study-login-bg.png'
import { Link } from 'react-router-dom';

interface LoginFormProps {
    error: string | undefined,
    keyIsSignIn: string,
    logo: string,
    title: string,
    labelBtnEntrar: string,
    labelConvite: string,
    actionButton: (name: string, email: string, password: string) => void,
}

export function LoginForm({ keyIsSignIn, logo, title, labelBtnEntrar, labelConvite, actionButton, error }: LoginFormProps) {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const isSignIn = keyIsSignIn == "signIn"
    const isSignUp = keyIsSignIn == "signUp"
    const isRecover = keyIsSignIn == "recover"

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

    const handleConfirmPasswordChange = (e: any) => {
        setConfirmPasswordError('')
        setConfirmPassword(e.target.value)
    }
    //#endregion

    const validaCampos = () => {
        let inconsistente = false;
        setNameError('')
        setEmailError('')
        setPasswordError('')
        setConfirmPasswordError('')

        if (isSignUp) {
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

        if (isRecover) {
            if (confirmPassword.length <= 5) {
                setConfirmPasswordError('A senha deve possuir 6 ou mais caracteres.');
                inconsistente = true
            }
            else if (confirmPassword != password) {
                setConfirmPasswordError('As senhas não são iguais.');
                inconsistente = true
            }
        }

        return inconsistente;
    }

    const validadeAndLogin = () => {
        if (!validaCampos())
            actionButton(name, email, password)
    }

    return (
        <Grid textAlign='center' verticalAlign='middle' style={{
            backgroundImage: "url(" + bgimage + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
        }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' style={{ color: "#483d8b" }} textAlign='center'>
                    {title}
                </Header>
                {error != undefined ?
                    <Message attached='top' warning>
                        <Icon name='user x' />
                        {error}
                    </Message>
                    : null}
                <Form size='large' style={{ autoComplete: "off" }}>
                    <Segment stacked style={{ backgroundColor: "#483d8b" }}>
                        {!isSignIn && !isRecover ?
                            (<>

                                {nameError.length > 0 ?
                                    <div className="label" style={{ color: "white" }}>{nameError}</div> : null
                                }
                                <Form.Input className={nameError.length > 0 ? "error" : ""} fluid icon='user' iconPosition='left' placeholder='Nome'
                                    value={name}
                                    onChange={(e) => handleNameChange(e)}
                                />
                            </>
                            ) : null
                        }

                        {emailError ?
                            <div className="label" style={{ color: "white" }}>{emailError}</div> : null
                        }
                        <Form.Input className={emailError.length > 0 ? "error" : ""} fluid icon='mail' iconPosition='left' placeholder='E-mail'
                            value={email}
                            onChange={(e) => handleEmailChange(e)}
                        />

                        {passwordError ?
                            <div className="label" style={{ color: "white" }}>{passwordError}</div> : null
                        }
                        <Form.Input
                            className={passwordError.length > 0 ? "error" : ""}
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Senha'
                            type='password'
                            value={password}
                            onChange={(e) => handlePasswordChange(e)}
                        />
                        {confirmPasswordError ?
                            <div className="label" style={{ color: "white" }}>{confirmPasswordError}</div> : null
                        }
                        {isRecover ?
                            <Form.Input
                                className={confirmPasswordError.length > 0 ? "error" : ""}
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Confirmar senha'
                                type='password'
                                value={confirmPassword}
                                onChange={(e) => handleConfirmPasswordChange(e)}
                            />
                            : null}

                        <Button
                            color='purple'
                            fluid
                            size='large'
                            onClick={() => validadeAndLogin()}
                        >
                            {labelBtnEntrar}
                        </Button>
                    </Segment>
                </Form>
                {labelConvite != "" ?
                    <Message style={{ backgroundColor: "#322b5a" }}>
                        <Header style={{ color: "#ffffff" }} as={Link} to={`${process.env.PUBLIC_URL}/${url}`}>
                            {labelConvite}
                        </Header>
                    </Message>
                    : null}
                <Header
                    color='blue'
                    textAlign='center'
                    style={{ display: 'block', textDecoration: 'underline' }}
                    as={Link}
                    to={`${process.env.PUBLIC_URL}/recuperar-senha`}>
                    Esqueci minha senha</Header>
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