import { Cronograma, EnumCronogramaActions, Disciplina, Assunto } from "../../domain";
import { CronogramaActionsType } from "../actions/cronogramaActions";
import { CronogramasState, CronogramaState } from "../../frameworks";

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

//#region 'Mock'
var mock_assunto1: Assunto[] = [
    new Assunto('111', 'Assunto 1', [], [], [], 'anotações1'),
    new Assunto('112', 'Assunto 2', [], [], [], 'anotações2'),
    new Assunto('113', 'Assunto 3', [], [], [], 'anotações3'),
    new Assunto('114', 'Assunto 4', [], [], [], 'anotações4'),
]

var mock_assunto2: Assunto[] = [
    new Assunto('115', 'Assunto 5', [], [], [], 'anotações5'),
    new Assunto('116', 'Assunto 6', [], [], [], 'anotações6'),
    new Assunto('117', 'Assunto 7', [], [], [], 'anotações7'),
    new Assunto('118', 'Assunto 8', [], [], [], 'anotações8'),
]

var mock_assunto3: Assunto[] = [
    new Assunto('119', 'Assunto 9', [], [], [], 'anotações9'),
    new Assunto('1110', 'Assunto 10', [], [], [], 'anotações10'),
    new Assunto('1111', 'Assunto 11', [], [], [], 'anotações11'),
    new Assunto('1112', 'Assunto 12', [], [], [], 'anotações12'),
]

var mock_discicplinas: Disciplina[] = [
    new Disciplina('11', 'Disicplina 1', mock_assunto1),
    new Disciplina('12', 'Disicplina 2', mock_assunto2),
    new Disciplina('13', 'Disicplina 3', mock_assunto3),
]

var mock: Cronograma[] = [
    new Cronograma(
        '1', "Cronograma 1", new Date(), new Date(), mock_discicplinas
    ),
    new Cronograma(
        '2', "Cronograma 2", new Date(), new Date(), mock_discicplinas
    ),
]
//#endregion

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
        default:
            return state;
    }
}