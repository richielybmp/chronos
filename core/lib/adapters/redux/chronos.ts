import { Cronograma, EnumCronogramaActions } from "../../domain";
import { CronogramaActionsType } from "../actions/cronogramaActions";

type ChronosStateType = {
    cronogramasList: { cronogramas: Cronograma[], error: any, loading: boolean },
    novoCronograma: { cronograma: Cronograma | null, error: any, loading: boolean },
    cronogramaOnDetail: { cronograma: Cronograma | null, error: any, loading: boolean },
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
        case EnumCronogramaActions.FETCH_CRONOGRAMAS:
            return {
                ...state,
                cronogramasList: { cronogramas: [], error: null, loading: true }
            };
        case EnumCronogramaActions.FETCH_CRONOGRAMAS_SUCCESS:
            var mock: Cronograma[] = [
                new Cronograma(
                    '1', "Cronograma 1", new Date(), new Date(), []
                ),
                new Cronograma(
                    '2', "Cronograma 2", new Date(), new Date(), []
                ),
            ]
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


        case EnumCronogramaActions.FETCH_CRONOGRAMA:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, loading: true }
            };
        case EnumCronogramaActions.FETCH_CRONOGRAMA_SUCCESS:
            let c_mock: Cronograma = new Cronograma("1", "Cronograma em detalhe", new Date(), new Date(), [])
            return {
                ...state,
                cronogramaOnDetail: { cronograma: c_mock, error: null, loading: false }
            };
        case EnumCronogramaActions.FETCH_CRONOGRAMA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramaOnDetail: { cronograma: null, error: error, loading: false }
            };

        default:
            return state;
    }
}