import { Cronograma, EnumDisciplinaActions } from "../../domain";
import { CronogramaInteractor } from '../../interactors';

const interactor = new CronogramaInteractor();

type FetchDisciplinasType = {
    type: EnumDisciplinaActions,
    payload: any
};

export type DisciplinaActionsType = FetchDisciplinasType;


//#region "Actions para FETCH CRONOGRAMAS"
export function createDisciplina(data: any) {
    return {
        type: EnumDisciplinaActions.CREATE_DISCIPLINA,
        payload: interactor.getAll()
    };
}

export function createDisciplinaSuccess(cronogramas: Cronograma[]) {
    return {
        type: EnumDisciplinaActions.CREATE_DISCIPLINA_SUCCESS,
        payload: cronogramas
    };
}

export function createDisciplinaFailure(error: any) {
    return {
        type: EnumDisciplinaActions.CREATE_DISCIPLINA_FAILURE,
        payload: error
    };
}
//#endregion