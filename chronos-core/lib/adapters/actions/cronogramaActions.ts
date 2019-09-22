import { CronogramaInteractor } from '../../interactors/CronogramaInteractor';
import { EnumCronogramaActions, Cronograma } from '../../domain';

const interactorCronograma = new CronogramaInteractor();

type FetchCronogramasType = {
    type: EnumCronogramaActions,
    payload: any
};

export type CronogramaActionsType = FetchCronogramasType;

//#region "Actions para CLEAR"
export function clearChronosState() {
    return {
        type: EnumCronogramaActions.CLEAR_STATE,
    };
}

export function clearError() {
    return {
        type: EnumCronogramaActions.CLEAR_ERROR
    };
}
// #endregion

//#region "Actions para FETCH CRONOGRAMAS"
export function fetchCronogramas() {
    return {
        type: EnumCronogramaActions.FETCH_CRONOGRAMAS,
        payload: interactorCronograma.getAllFull()
    };
}

export function fetchCronogramasSuccess(cronogramas: Cronograma) {
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
        // payload: id
        payload: interactorCronograma.getCronogramaById(id)
    };
}

export function fetchCronogramaSuccess(cronogramaSelecionado: any) {
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

export function updateCronogramaSuccess(cronogramaSelecionado: any) {
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

//#region "Actions para DEFINIR DISCIPLINA EM DETALHE"
export function setDisciplinaOnDetail(disciplina: string) {
    return {
        type: EnumCronogramaActions.SET_DISCIPLINA_DETAIL,
        payload: disciplina
    };
}
//#endregion