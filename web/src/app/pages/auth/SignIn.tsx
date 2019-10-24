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
    clearState: () => void,
    clearUserError: () => void,
}

function SignIn(props: Props) {

    const { loading, error } = props.auth
    const { clearUserError } = props

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
        const clear = () => {
            clearUserError();
        };
        clear();
    }, [clearUserError])

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    return (
        <SignInForm error={error} actionLogin={handleLogin} />
    )
}

export default SignIn