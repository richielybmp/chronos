import React from "react";
import { configureStore } from "chronos-core";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import IndexHome from "./app/pages/home/IndexHome";
import Main from "./app/Main";
import SignInContainer from "./app/containers/auth/SignInContainer";
import SignUpContainer from "./app/containers/auth/SignUpContainer";
import RecoverPasswordContainer from "./app/containers/auth/RecoverPasswordContainer";
import Unauthorized from "./app/pages/httpStatus/Unauthorized";
import ConfirmPasswordContainer from "./app/containers/auth/ConfirmPasswordContainer";

export const ChronosContext = React.createContext<any>({})
const store = configureStore() as any;

const ChronosRoutes = () => {
    return (
        <ChronosContext.Provider value={store}>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path={`${process.env.PUBLIC_URL}/`} exact component={IndexHome} />
                        <Route path={`${process.env.PUBLIC_URL}/cronogramas`} component={Main} />
                        <Route path={`${process.env.PUBLIC_URL}/entrar`} component={SignInContainer} />
                        <Route path={`${process.env.PUBLIC_URL}/cadastrar`} component={SignUpContainer} />
                        <Route path={`${process.env.PUBLIC_URL}/recuperar-senha`} component={RecoverPasswordContainer} />
                        <Route path={`${process.env.PUBLIC_URL}/confirmar-senha`} component={ConfirmPasswordContainer} />
                        <Route path={`${process.env.PUBLIC_URL}/unauthorized`} component={Unauthorized} />

                    </Switch>
                </BrowserRouter>
            </Provider>
        </ChronosContext.Provider>
    )
};

export default ChronosRoutes;