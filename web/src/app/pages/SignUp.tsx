import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import { LoginForm, LoaderComponent } from '../shared/components';
import { User } from 'chronos-core/dist/domain/User';
import { Confirm } from 'semantic-ui-react';

interface Props {
    auth: any;
    match: any,
    history: any,
    signUp: (user: User) => void,
    clearState: () => void
}

function SignUp(props: Props) {

    const { loading, error, user } = props.auth
    const [criouUsuario, setCriouUsuario] = useState(false)

    const handleLogin = (name: string, email: string, password: string) => {
        props.signUp(new User(name, email, password))
    }

    const listenForAuthUser = () => {
        if (user != null)
            setCriouUsuario(true)
    };

    const redirectToSignIn = () => {
        setCriouUsuario(false)
        props.history.push(`${process.env.PUBLIC_URL}/entrar`);
    };

    useEffect(() => {
        props.clearState()
    }, [])

    useEffect(() => {
        listenForAuthUser();
        return listenForAuthUser;
    }, [props.auth.user])

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    if (criouUsuario) {
        return <Confirm open={criouUsuario == true} onCancel={() => setCriouUsuario(false)} onConfirm={() => redirectToSignIn()} />
    }

    return (
        <LoginForm
            keyIsSignIn={"signUp"}
            logo={logo}
            title={'Cadastre-se'}
            labelBtnEntrar={'Cadastrar'}
            labelConvite={'Já possui conta? Entrar!'}
            actionButton={handleLogin}
            error={error}
        />
    )
}

export default SignUp