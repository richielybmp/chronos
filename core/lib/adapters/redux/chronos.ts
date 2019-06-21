import { Cronograma, EnumCronogramaActions } from "../../domain";
import { CronogramaActionsType } from "../actions/cronogramaActions";
import { CronogramasState, CronogramaState } from "../../frameworks";
import mock from "../../mock_data";

type ChronosStateType = {
    cronogramasList: CronogramasState,
    novoCronograma: CronogramaState,
    cronogramaOnDetail: CronogramaState,
}

const INITIAL_STATE = {
    cronogramasList: { cronogramas: [], error: null, loading: false },
    novoCronograma: { cronograma: null, error: null, loading: false },
    cronogramaOnDetail: { cronograma: null, error: null, loading: false },
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
                cronogramasList: { cronogramas: [], error: null, loading: true },
                cronogramaOnDetail: { cronograma: null, error: null, loading: false }
            };
        case EnumCronogramaActions.FETCH_CRONOGRAMAS_SUCCESS:
            return {
                ...state,
                cronogramasList: { cronogramas: mock, error: null, loading: false }
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
            return {
                ...state,
                cronogramaOnDetail: { cronograma: mock[0], error: null, loading: false }
            };
        case EnumCronogramaActions.FETCH_CRONOGRAMA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramaOnDetail: { cronograma: null, error: error, loading: false }
            };
        //#endregion

        //#region 'create cronograma'
        case EnumCronogramaActions.CREATE_CRONOGRAMA:
            return {
                ...state,
                novoCronograma: { ...state.novoCronograma, loading: true }
            };
        case EnumCronogramaActions.CREATE_CRONOGRAMA_SUCCESS:
            console.log(action.payload);
            const novo = new Cronograma('123', 'Novo Cronograma 123', new Date(), new Date(), [])
            mock.push(novo)
            return {
                ...state,
                cronogramasList: { cronogramas: mock, error: null, loading: false },
                novoCronograma: { cronograma: novo, error: null, loading: false }
            };
        case EnumCronogramaActions.CREATE_CRONOGRAMA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                novoCronograma: { cronograma: null, error: error, loading: false }
            };
        case EnumCronogramaActions.RESET_CRONOGRAMA:
            return {
                ...state,
                novoCronograma: { cronograma: null, error: null, loading: false }
            };
        //#endregion

        //#region 'UPDATE cronograma'
        case EnumCronogramaActions.UPDATE_CRONOGRAMA:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, loading: true, error: false }
            };
        case EnumCronogramaActions.UPDATE_CRONOGRAMA_SUCCESS:
            mock[0].descricao = "DESCRICAO FOI ATUALIZADA"
            const updated = mock[0]
            return {
                ...state,
                cronogramaOnDetail: { cronograma: updated, error: null, loading: false },
            };
        case EnumCronogramaActions.UPDATE_CRONOGRAMA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: error, loading: false }
            };
        //#endregion
        default:
            return state;
    }
}