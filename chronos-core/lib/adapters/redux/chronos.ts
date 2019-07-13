import { EnumCronogramaActions } from "../../domain";
import { CronogramaActionsType } from "../actions/cronogramaActions";
import { ChronosStateType } from "../../frameworks";
import { CronogramaRepository } from "../../storage";

const repository = new CronogramaRepository();

const INITIAL_STATE = {
    cronogramasList: { cronogramas: [], error: null, loading: false },
    novoCronograma: { old: null, cronograma: null, error: null, loading: false },
    cronogramaOnDetail: { old: null, cronograma: null, error: null, loading: false },
};

export const chronosReducer = (
    state: ChronosStateType = INITIAL_STATE,
    action: CronogramaActionsType
): ChronosStateType => {
    let error;
    switch (action.type) {
        //#region 'fetch cronogramas'
        case EnumCronogramaActions.FETCH_CRONOGRAMAS:
            return {
                ...state,
                cronogramasList: { cronogramas: [], error: null, loading: true }
            };
        case EnumCronogramaActions.FETCH_CRONOGRAMAS_SUCCESS:
            const cronogramas = repository.cronogramasToDomain(action.payload)
            return {
                ...state,
                cronogramasList: { cronogramas: cronogramas, error: null, loading: false },
                cronogramaOnDetail: { old: null, cronograma: null, error: null, loading: false }
            };
        case EnumCronogramaActions.FETCH_CRONOGRAMAS_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramasList: { cronogramas: [], error: error, loading: false }
            };
        //#endregion

        //#region 'fetch cronograma'
        case EnumCronogramaActions.FETCH_CRONOGRAMA:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, loading: true }
            };
        case EnumCronogramaActions.FETCH_CRONOGRAMA_SUCCESS:
            var payload = repository.cronogramasToDomain(action.payload)[0]
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, cronograma: payload, error: null, loading: false }
            };
        case EnumCronogramaActions.FETCH_CRONOGRAMA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, cronograma: null, error: error, loading: false }
            };
        //#endregion

        //#region 'create cronograma'
        case EnumCronogramaActions.CREATE_CRONOGRAMA:
            return {
                ...state,
                novoCronograma: { ...state.novoCronograma, loading: true }
            };
        case EnumCronogramaActions.CREATE_CRONOGRAMA_SUCCESS:
            var cronogramas_temp = state.cronogramasList.cronogramas;
            var payload = repository.cronogramasToDomain([action.payload])[0]

            return {
                ...state,
                cronogramasList: { cronogramas: [...cronogramas_temp, payload], error: null, loading: false },
                novoCronograma: { old: null, cronograma: action.payload, error: null, loading: false }
            };
        case EnumCronogramaActions.CREATE_CRONOGRAMA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                novoCronograma: { old: null, cronograma: null, error: error, loading: false }
            };
        case EnumCronogramaActions.RESET_CRONOGRAMA:
            return {
                ...state,
                novoCronograma: { old: null, cronograma: null, error: null, loading: false }
            };
        //#endregion

        //#region 'UPDATE cronograma'
        case EnumCronogramaActions.UPDATE_CRONOGRAMA:
            var cronograma_antigo = state.cronogramaOnDetail.cronograma
            var cronograma_update = action.payload.cronograma

            if (cronograma_antigo)
                cronograma_update.disciplinas = cronograma_antigo.disciplinas

            return {
                ...state,
                cronogramaOnDetail: {
                    old: cronograma_antigo,
                    cronograma: action.payload.cronograma,
                    loading: true,
                    error: false
                }
            };
        case EnumCronogramaActions.UPDATE_CRONOGRAMA_SUCCESS:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: null, loading: false },
            };
        case EnumCronogramaActions.UPDATE_CRONOGRAMA_FAILURE:
            error = action.payload || { message: action.payload.message };
            const old = state.cronogramaOnDetail.old;
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, cronograma: old, error, loading: false }
            };
        // #endregion

        // #region 'DELETE cronograma'
        case EnumCronogramaActions.DELETE_CRONOGRAMA:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: null, loading: true }
            }
        case EnumCronogramaActions.DELETE_CRONOGRAMA_SUCCESS:
            return {
                ...state,
                cronogramaOnDetail: { cronograma: null, old: null, error: null, loading: false }
            }
        case EnumCronogramaActions.DELETE_CRONOGRAMA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: error, loading: false }
            }

        case EnumCronogramaActions.CLEAR_ERROR:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: null }
            }

        case EnumCronogramaActions.CLEAR_STATE:
            return INITIAL_STATE;
        default:
            return state;
    }
}