import { User } from "chronos-core/dist/domain/User";
import React, { useContext, useEffect } from "react";
import { ChronosContext } from "../../../ChronosRoutes";
import { isAuthenticated } from "chronos-core";
import { LoaderComponent } from "../../shared/components";
import SignInForm from "../forms/SignInForm";

interface Props {
    auth: any;
    match: any,
    history: any,
    signIn: (user: User) => void,
    clearState: () => void
}

function SignIn(props: Props) {

    const { loading, error, signIn } = props.auth

    const context = useContext(ChronosContext)

    const handleLogin = (email: string, password: string) => {
        props.signIn(new User('', email, password))
    }

    const listenForAuthUser = () => {
        if (isAuthenticated() && context.getState().auth.user) {
            props.history.push(`${process.env.PUBLIC_URL}/cronogramas`);
            return;
        }
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

    return (
        // <LoginForm
        //     keyIsSignIn={"signIn"}
        //     logo={logo}
        //     title={'Entrar na sua conta'}
        //     labelBtnEntrar={'Entrar'}
        //     labelConvite={'Novo por aqui? Cadastre-se'}
        //     actionButton={handleLogin}
        //     error={error}
        // />
        <SignInForm error={error} actionLogin={handleLogin} />
    )
}

export default SignIn