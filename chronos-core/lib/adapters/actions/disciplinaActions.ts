import { DisciplinaInteractor } from '../../interactors/DisciplinaInteractor';
import { EnumCronogramaActions, Disciplina } from '../../domain';

const interactorDisciplina = new DisciplinaInteractor();

//#region "Actions para CREATE DISCIPLINA"
export function createDisciplina(idCronograma: string, disciplina: Disciplina) {
    return {
        type: EnumCronogramaActions.CREATE_DISCIPLINA,
        payload: interactorDisciplina.createDisciplina(idCronograma, disciplina)
    };
}

export function createDisciplinaSuccess(data: any) {
    return {
        type: EnumCronogramaActions.CREATE_DISCIPLINA_SUCCESS,
        payload: data
    };
}

export function createDisciplinaFailure(error: any) {
    return {
        type: EnumCronogramaActions.CREATE_DISCIPLINA_FAILURE,
        payload: error
    };
}
//#endregion

//#region "Actions para DELETE DISCIPLINA POR ID"
export function deleteDisciplina(id: string) {
    return {
        type: EnumCronogramaActions.DELETE_DISCIPLINA,
        payload: interactorDisciplina.deleteDisciplinaById(id)
    };
}

export function deleteDisciplinaSuccess(data: any) {
    return {
        type: EnumCronogramaActions.DELETE_DISCIPLINA_SUCCESS,
        payload: data
    };
}

export function deleteDisciplinaFailure(error: any) {
    return {
        type: EnumCronogramaActions.DELETE_DISCIPLINA_FAILURE,
        payload: error
    };
}
//#endregion

//#region "Actions para UPDATE DISCIPLINA POR ID"
export function updateDisciplina(idCronograma: string, d: Disciplina) {
    return {
        type: EnumCronogramaActions.UPDATE_DISCIPLINA,
        payload: { update: interactorDisciplina.updateDisciplina(idCronograma, d), disciplina: d }
    };
}

export function updateDisciplinaSuccess(d: any) {
    return {
        type: EnumCronogramaActions.UPDATE_DISCIPLINA_SUCCESS,
        payload: d
    };
}

export function updateDisciplinaFailure(error: any) {
    return {
        type: EnumCronogramaActions.UPDATE_DISCIPLINA_FAILURE,
        payload: error
    };
}
//#endregion
