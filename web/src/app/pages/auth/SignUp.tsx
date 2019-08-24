import { User } from 'chronos-core/dist/domain/User';
import React, { useState, useEffect } from 'react';
import { LoaderComponent } from '../../shared/components';
import { Confirm } from 'semantic-ui-react';
import SignUpForm from '../forms/SignUpForm';

interface Props {
    auth: any
    , match: any
    , history: any
    , signUp: (user: User) => void
    , clearState: () => void
}

function SignUp(props: Props) {

    const { loading, error, newUser } = props.auth
    const [criouUsuario, setCriouUsuario] = useState(false)

    useEffect(() => {
        props.clearState();
    }, [])

    useEffect(() => {
        listenForAuthUser();
        return listenForAuthUser;
    }, [props.auth.newUser])

    const handleAcionSignUp = (name: string, email: string, password: string) => {
        props.signUp(new User(name, email, password))
    }

    const listenForAuthUser = () => {
        if (newUser != null) {
            setCriouUsuario(true)
        }
        else {
            setCriouUsuario(false)
        }
    };

    const redirectToSignIn = () => {
        setCriouUsuario(false)
        props.history.push(`${process.env.PUBLIC_URL}/entrar`);
    };

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    if (criouUsuario) {
        return <Confirm
            content="Usuário criado com sucesso! Por favor, prossiga com o login."
            open={criouUsuario === true}
            onCancel={() => setCriouUsuario(false)}
            onConfirm={() => redirectToSignIn()} />
    }

    return (
        <SignUpForm error={error} actionSignUp={handleAcionSignUp} />
    )
}

export default SignUp