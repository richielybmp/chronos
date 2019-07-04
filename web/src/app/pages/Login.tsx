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

function Login(props: Props) {

    const { error, loading } = props.auth
    debugger
    const handleLogin = () => {
        props.signIn(new User('', "devfilsk@gmail.com", "secret"))
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
            logo={logo}
            title={'Entrar na sua conta'}
            labelBtnEntrar={'Entrar'}
            url={`${process.env.PUBLIC_URL}/cronogramas`}
            labelConvite={'Novo por aqui?'}
            actionLogin={handleLogin}
        />
    )
}

export default Login