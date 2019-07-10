import React, { useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import { LoginForm, LoaderComponent } from '../shared/components';
import { User } from 'chronos-core/dist/domain/User';
import { isAuthenticated } from 'chronos-core';

interface Props {
    auth: any;
    match: any,
    history: any,
    signUp: (user: User) => void,
}

function SignUp(props: Props) {

    const { loading } = props.auth

    const handleLogin = (name: string, email: string, password: string) => {
        props.signUp(new User(name, email, password))
    }

    const listenForAuthUser = () => {
        if (isAuthenticated()) {
            props.history.push(`${process.env.PUBLIC_URL}/cronogramas`);
            return;
        }
    };

    useEffect(() => {
        listenForAuthUser();
        return listenForAuthUser;
    }, [props.auth.user])

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    return (
        <LoginForm
            isSignIn={false}
            logo={logo}
            title={'Cadastre-se'}
            labelBtnEntrar={'Cadastrar'}
            labelConvite={'Já possui conta? Entrar!'}
            actionButton={handleLogin}
        />
    )
}

export default SignUp