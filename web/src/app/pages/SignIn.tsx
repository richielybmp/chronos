import React, { useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import { LoginForm, LoaderComponent } from '../shared/components';
import { User } from 'chronos-core/dist/domain/User';
import { isAuthenticated } from 'chronos-core';

interface Props {
    auth: any;
    match: any,
    history: any,
    signIn: (user: User) => void,
}

function SignIn(props: Props) {

    const { loading } = props.auth

    const handleLogin = (name: string, email: string, password: string) => {
        props.signIn(new User(name, email, password))
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
            isSignIn={true}
            logo={logo}
            title={'Entrar na sua conta'}
            labelBtnEntrar={'Entrar'}
            labelConvite={'Novo por aqui? Cadastre-se'}
            actionButton={handleLogin}
        />
    )
}

export default SignIn