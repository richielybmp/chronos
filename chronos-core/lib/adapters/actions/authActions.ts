import { EnumAuthActions } from '../../domain';
import { User } from '../../domain/User';
import { AuthInteractor } from '../../interactors';

const interactor = new AuthInteractor();

type AuthCronogramasType = {
    type: EnumAuthActions,
    payload: any
};

export type AuthActionsType = AuthCronogramasType;

export function clearAuthState() {
    return {
        type: EnumAuthActions.CLEAR_STATE,
    };
}

//#region Sign in
export function signInUser(user: User) {
    return {
        type: EnumAuthActions.SIGN_IN,
        payload: interactor.signIn(user)
    };
}

export function signInUserSuccess(user: any) {
    return {
        type: EnumAuthActions.SIGN_IN_SUCCESS,
        payload: user
    };
}

export function signInUserFailure(error: any) {
    return {
        type: EnumAuthActions.SIGN_IN_FAILURE,
        payload: error
    };
}
//#endregion

//#region Sign up
export function signUpUser(user: User) {
    return {
        type: EnumAuthActions.SIGN_UP,
        payload: interactor.signUp(user)
    };
}

export function signUpUserSuccess(user: any) {
    return {
        type: EnumAuthActions.SIGN_UP_SUCCESS,
        payload: user
    };
}

export function signUpUserFailure(error: any) {
    return {
        type: EnumAuthActions.SIGN_UP_FAILURE,
        payload: error
    };
}
//#endregion

//#region Log out
export function logOutUser() {
    return {
        type: EnumAuthActions.LOG_OUT,
        payload: interactor.logOut()
    };
}

export function logOutUserSuccess() {
    return {
        type: EnumAuthActions.LOG_OUT_SUCCESS,
        payload: null
    };
}

export function logOutUserFailure(error: any) {
    return {
        type: EnumAuthActions.LOG_OUT_FAILURE,
        payload: error
    };
}
//#endregion


//#region Recover Password
export function recoverPassword(email: string, novaSenha: string) {
    return {
        type: EnumAuthActions.RECOVER_PASSWORD,
        payload: interactor.recoverPassword(email, novaSenha)
    };
}

export function recoverPasswordSuccess() {
    return {
        type: EnumAuthActions.RECOVER_PASSWORD_SUCCESS,
        payload: null
    };
}

export function recoverPasswordFailure(error: any) {
    return {
        type: EnumAuthActions.RECOVER_PASSWORD_FAILURE,
        payload: error
    };
}
//#endregion