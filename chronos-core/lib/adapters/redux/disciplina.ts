import { EnumDisciplinaActions } from "../../domain";
import { CronogramaRepository } from "../../storage";
import { DisciplinaActionsType } from "../actions/disciplinaActions";

const repository = new CronogramaRepository();

const INITIAL_STATE = {
    novoCronograma: { disciplina: null, error: null, loading: false },
};

export const chronosReducer = (
    state: any = INITIAL_STATE,
    action: DisciplinaActionsType
): any => {
    let error;
    switch (action.type) {
        //#region 'fetch cronogramas'
        case EnumDisciplinaActions.CREATE_DISCIPLINA:
            return {
                ...state,
                cronogramasList: { cronogramas: [], error: null, loading: true }
            };
        case EnumDisciplinaActions.CREATE_DISCIPLINA_SUCCESS:
            const cronogramas = repository.cronogramasToDomain(action.payload)
            return {
                ...state,
                cronogramasList: { cronogramas: cronogramas, error: null, loading: false },
                cronogramaOnDetail: { old: null, cronograma: null, error: null, loading: false }
            };
        case EnumDisciplinaActions.CREATE_DISCIPLINA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramasList: { cronogramas: [], error: error, loading: false }
            };
        //#endregion


        default:
            return state;
    }
}