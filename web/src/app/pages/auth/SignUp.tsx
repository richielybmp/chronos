import { User } from 'chronos-core/dist/domain/User';
import React, { useState, useEffect } from 'react';
import { LoaderComponent } from '../../shared/components';
import { Confirm } from 'semantic-ui-react';
import SignUpForm from '../forms/SignUpForm';

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

    const handleAcionSignUp = (name: string, email: string, password: string) => {
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
        listenForAuthUser();
        return listenForAuthUser;
    }, [props.auth.user])

    useEffect(() => {
        props.clearState()
    }, [])

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    if (criouUsuario) {
        return <Confirm
            content="Usuário criado com sucesso! Por favor, prossiga com o login."
            open={criouUsuario == true}
            onCancel={() => setCriouUsuario(false)}
            onConfirm={() => redirectToSignIn()} />
    }

    return (
        <SignUpForm error={error} actionSignUp={handleAcionSignUp} />
    )
}

export default SignUp