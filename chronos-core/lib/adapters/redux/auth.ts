import { EnumAuthActions, AuthActionsType } from "../..";
import { login, logout } from "../../services/localStorageAuth";
import { userInfo } from "os";

type AuthStateType = {
    user: any
    , error: any
    , loading: boolean
}

const INITIAL_STATE = {
    user: null
    , error: undefined
    , loading: false
};

export const authReducer = (
    state: AuthStateType = INITIAL_STATE,
    action: AuthActionsType
): AuthStateType => {
    let error;

    switch (action.type) {
        //#region 'signin'
        case EnumAuthActions.SIGN_IN:
            return {
                ...state,
                user: null, error: undefined, loading: true
            };
        case EnumAuthActions.SIGN_IN_SUCCESS:
            login(action.payload.token)
            return {
                ...state,
                user: action.payload, error: undefined, loading: false
            };
        case EnumAuthActions.SIGN_IN_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                user: null, error: error, loading: false
            };
        //#endregion

        //#region 'signup'
        case EnumAuthActions.SIGN_UP:
            return {
                ...state,
                user: null, error: undefined, loading: true
            };
        case EnumAuthActions.SIGN_UP_SUCCESS:
            return {
                ...state,
                user: action.payload, error: undefined, loading: false
            };
        case EnumAuthActions.SIGN_UP_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                user: null, error: error, loading: false
            };
        //#endregion

        //#region 'logout'
        case EnumAuthActions.LOG_OUT:
            return state
        case EnumAuthActions.LOG_OUT_SUCCESS:
            // clears localStorageAuth
            state = {
                ...state,
                error: undefined, loading: false
            };
            logout()
            return state
        case EnumAuthActions.LOG_OUT_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                user: null, error: error, loading: false
            };
        //#endregion

        //#region 'update user'
        case EnumAuthActions.UPDATE_USER:
            return {
                ...state, error: null, loading: true
            }
        case EnumAuthActions.UPDATE_USER_SUCCESS:
            const novo_user = action.payload.user;
            return {
                user: { user: novo_user }, error: null, loading: false
            }
        case EnumAuthActions.UPDATE_USER_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                error: error, loading: false
            };
        //#endregion

        case EnumAuthActions.CLEAR_USER_ERROR:
            return { ...state, error: null, loading: false }

        case EnumAuthActions.CLEAR_STATE:
            return INITIAL_STATE

        default:
            return state;
    }
}