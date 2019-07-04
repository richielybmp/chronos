import { EnumAuthActions, AuthActionsType } from "../..";
import { login } from "../../services/localStorageAuth";

type AuthStateType = {
    user: any
    , error: any
    , loading: boolean
}

const INITIAL_STATE = {
    user: null
    , error: null
    , loading: false
};

export const authReducer = (
    state: AuthStateType = INITIAL_STATE,
    action: AuthActionsType
): AuthStateType => {
    let error;

    switch (action.type) {
        //#region 'signin cronogramas'
        case EnumAuthActions.SIGN_IN:
            return {
                ...state,
                user: null, error: null, loading: true
            };
        case EnumAuthActions.SIGN_IN_SUCCESS:
            console.log(action.payload);
            // {token: ...}
            login(action.payload.token)
            return {
                ...state,
                user: action.payload, error: null, loading: false
            };
        case EnumAuthActions.SIGN_IN_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                user: null, error: error, loading: false
            };
        //#endregion

        //#region 'signup cronograma'
        case EnumAuthActions.SIGN_UP:
            return {
                ...state,
                user: null, error: null, loading: true
            };
        case EnumAuthActions.SIGN_UP_SUCCESS:
            return {
                ...state,
                user: action.payload, error: null, loading: false
            };
        case EnumAuthActions.SIGN_UP_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                user: null, error: error, loading: false
            };
        //#endregion

        default:
            return state;
    }
}