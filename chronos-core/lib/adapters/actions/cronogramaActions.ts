import { Assunto } from './../../domain/Assunto';
import { Cronograma, EnumCronogramaActions, Disciplina } from "../../domain";
import { CronogramaInteractor, DisciplinaInteractor } from '../../interactors';
import { AssuntoInteractor } from '../../interactors/AssuntoInteractor';

const interactorCronograma = new CronogramaInteractor();
const interactorDisciplina = new DisciplinaInteractor();
const interactorAssunto = new AssuntoInteractor();

type FetchCronogramasType = {
    type: EnumCronogramaActions,
    payload: any
};

export type CronogramaActionsType = FetchCronogramasType;

export function clearChronosState() {
    return {
        type: EnumCronogramaActions.CLEAR_STATE,
    };
}

//#region "Actions para FETCH CRONOGRAMAS"
export function fetchCronogramas() {
    return {
        type: EnumCronogramaActions.FETCH_CRONOGRAMAS,
        payload: interactorCronograma.getAll()
    };
}

export function fetchCronogramasSuccess(cronogramas: Cronograma[]) {
    return {
        type: EnumCronogramaActions.FETCH_CRONOGRAMAS_SUCCESS,
        payload: cronogramas
    };
}

export function fetchCronogramasFailure(error: any) {
    return {
        type: EnumCronogramaActions.FETCH_CRONOGRAMAS_FAILURE,
        payload: error
    };
}
//#endregion

//#region "Actions para FETCH CRONOGRAMA POR ID"
export function fetchCronograma(id: string) {
    return {
        type: EnumCronogramaActions.FETCH_CRONOGRAMA,
        payload: interactorCronograma.getCronogramaById(id)
    };
}

export function fetchCronogramaSuccess(cronogramaSelecionado: Cronograma) {
    return {
        type: EnumCronogramaActions.FETCH_CRONOGRAMA_SUCCESS,
        payload: cronogramaSelecionado
    };
}

export function fetchCronogramaFailure(error: any) {
    return {
        type: EnumCronogramaActions.FETCH_CRONOGRAMA_FAILURE,
        payload: error
    };
}
//#endregion

//#region "Actions para CREATE CRONOGRAMA"
export function createCronograma(cronograma: Cronograma) {
    return {
        type: EnumCronogramaActions.CREATE_CRONOGRAMA,
        payload: interactorCronograma.createCronograma(cronograma)
    };
}

export function resetNovoCronograma() {
    return {
        type: EnumCronogramaActions.RESET_CRONOGRAMA,
    }
}

export function createCronogramaSuccess(novoCronograma: Cronograma) {
    return {
        type: EnumCronogramaActions.CREATE_CRONOGRAMA_SUCCESS,
        payload: novoCronograma
    };
}

export function createCronogramaFailure(error: any) {
    return {
        type: EnumCronogramaActions.CREATE_CRONOGRAMA_FAILURE,
        payload: error
    };
}
//#endregion

//#region "Actions para UPDATE CRONOGRAMA POR ID"
export function updateCronograma(c: Cronograma) {
    return {
        type: EnumCronogramaActions.UPDATE_CRONOGRAMA,
        payload: { update: interactorCronograma.updateCronograma(c), cronograma: c }
    };
}

export function updateCronogramaSuccess(cronogramaSelecionado: Cronograma) {
    return {
        type: EnumCronogramaActions.UPDATE_CRONOGRAMA_SUCCESS,
        payload: cronogramaSelecionado
    };
}

export function updateCronogramaFailure(error: any) {
    return {
        type: EnumCronogramaActions.UPDATE_CRONOGRAMA_FAILURE,
        payload: error
    };
}
//#endregion

//#region "Actions para DELETE CRONOGRAMA POR ID"
export function deleteCronograma(id: string) {
    return {
        type: EnumCronogramaActions.DELETE_CRONOGRAMA,
        payload: interactorCronograma.deleteCronogramaById(id)
    };
}

export function deleteCronogramaSuccess(data: any) {
    return {
        type: EnumCronogramaActions.DELETE_CRONOGRAMA_SUCCESS,
        payload: data
    };
}

export function deleteCronogramaFailure(error: any) {
    return {
        type: EnumCronogramaActions.DELETE_CRONOGRAMA_FAILURE,
        payload: error
    };
}
//#endregion

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

export function updateDisciplinaSuccess(d: Disciplina) {
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

//#region "Actions para CREATE ASSUNTO"
export function createAssunto(assunto: Assunto) {
    return {
        type: EnumCronogramaActions.CREATE_ASSUNTO,
        payload: interactorAssunto.createAssunto(assunto)
    };
}

export function createAssuntoSuccess(data: any) {
    return {
        type: EnumCronogramaActions.CREATE_ASSUNTO_SUCCESS,
        payload: data
    };
}

export function createAssuntoFailure(error: any) {
    return {
        type: EnumCronogramaActions.CREATE_ASSUNTO_FAILURE,
        payload: error
    };
}
//#endregion

//#region "Actions para FETCH ASSUNTO POR ID"
export function fetchAssunto(idDisciplina: string, idAssunto: string) {
    return {
        type: EnumCronogramaActions.FETCH_ASSUNTO,
        payload: { idDisciplina: idDisciplina, idAssunto: idAssunto }
    };
}

export function fetchAssuntoSuccess(a: any) {
    return {
        type: EnumCronogramaActions.FETCH_ASSUNTO_SUCCESS,
        payload: a
    };
}

export function fetchAssuntoFailure(error: any) {
    return {
        type: EnumCronogramaActions.FETCH_ASSUNTO_FAILURE,
        payload: error
    };
}
//#endregion

export function clearError() {
    return {
        type: EnumCronogramaActions.CLEAR_ERROR
    };
}