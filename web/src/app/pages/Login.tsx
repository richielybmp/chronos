import React from 'react'
import logo from '../../assets/images/logo.png'
import { LoginForm } from '../shared/components';

const Login = () => (
    <LoginForm
        logo={logo}
        title={'Entrar na sua conta'}
        labelBtnEntrar={'Entrar'}
        url={`${process.env.PUBLIC_URL}/cronogramas`}
        labelConvite={'Novo por aqui?'} />
)

export default Login