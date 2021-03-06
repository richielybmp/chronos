import { EnumAuthActions, AuthActionsType } from "../..";
import { login, logout } from "../../services/localStorageAuth";
import { userInfo } from "os";

type AuthStateType = {
    user: any
    , newUser: any
    , error: any
    , loading: boolean
    // , mailToRecover: string
}

const INITIAL_STATE = {
    user: null
    , newUser: null
    , error: undefined
    , loading: false
    // , mailToRecover: ''
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
                newUser: null, user: null, error: undefined, loading: true
            };
        case EnumAuthActions.SIGN_IN_SUCCESS:
            login(action.payload.token)
            return {
                ...state,
                user: action.payload, error: undefined, loading: false
            };
        case EnumAuthActions.SIGN_IN_FAILURE:
            error = getErrorMessage(action);
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
                newUser: action.payload, error: undefined, loading: false
            };
        case EnumAuthActions.SIGN_UP_FAILURE:
            error = getErrorMessage(action);
            return {
                ...state,
                newUser: null, user: null, error: error, loading: false
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
            error = getErrorMessage(action);
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
                ...state, user: { user: novo_user }, error: null, loading: false
            }
        case EnumAuthActions.UPDATE_USER_FAILURE:
            error = getErrorMessage(action);
            return {
                ...state,
                error: error, loading: false
            };
        //#endregion

        //#region 'recover password'
        case EnumAuthActions.RECOVER_PASSWORD:
            return { ...state, error: null, loading: true }
        case EnumAuthActions.RECOVER_PASSWORD_SUCCESS:
            return { ...state, error: null, loading: false }
        case EnumAuthActions.RECOVER_PASSWORD_FAILURE:
            error = getErrorMessage(action);
            return { ...state, error: error, loading: false }
        //#endregion

        //#region 'confirm password'
        case EnumAuthActions.CONFIRM_PASSWORD:
            return { ...state, error: null, loading: true }
        case EnumAuthActions.CONFIRM_PASSWORD_SUCCESS:
            return { ...state, error: null, loading: false }
        case EnumAuthActions.CONFIRM_PASSWORD_FAILURE:
            error = getErrorMessage(action);
            return { ...state, error: error, loading: false }
        //#endregion

        case EnumAuthActions.CLEAR_USER_ERROR:
            return { ...state, error: null, loading: false }

        case EnumAuthActions.CLEAR_USER_ERROR_SUCCESS:
            return state;

        case EnumAuthActions.CLEAR_STATE:
            return {
                user: null
                , newUser: null
                , error: undefined
                , loading: false
                // , mailToRecover: ''
            }
        case EnumAuthActions.CLEAR_STATE_SUCCESS:
            return INITIAL_STATE

        default:
            return state;
    }
}

function getErrorMessage(action: { type: EnumAuthActions; payload: any; }) {
    var error;

    if (action.payload.msg) {
        error = action.payload.msg;
    }
    else if (action.payload.message) {
        error = action.payload.message;
    }
    else {
        error = action.payload;
    }

    return error;
}
