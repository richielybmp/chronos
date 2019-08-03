
import logo from '../../../assets/images/logo.png'
import React, { useContext } from 'react';
import { ChronosContext } from '../../../ChronosRoutes';
import { LoaderComponent, LoginForm } from '../../shared/components';

interface Props {
    auth: any;
    match: any,
    history: any,
    recoverPassword: (email: string, novaSenha: string, callBack: Function) => void
    clearState: () => void
}

function RecoverPassword(props: Props) {

    const { loading, error } = props.auth

    const context = useContext(ChronosContext)

    const handleRecuperar = (name: string, email: string, novaSenha: string) => {
        props.recoverPassword(email, novaSenha, () => {
            props.history.push(`${process.env.PUBLIC_URL}/entrar`);
        })
    }

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    return (
        <LoginForm
            keyIsSignIn={"recover"}
            logo={logo}
            title={'Recuperar senha'}
            labelBtnEntrar={'Recuperar'}
            labelConvite={''}
            actionButton={handleRecuperar}
            error={error}
        />
    )
}

export default RecoverPassword