import { Cronograma, EnumCronogramaActions } from "../../domain";
import { CronogramaInteractor } from '../../interactors';

const interactor = new CronogramaInteractor();

type FetchCronogramasType = {
    type: EnumCronogramaActions,
    payload: any
};

export type CronogramaActionsType = FetchCronogramasType;

//#region "Actions para FETCH CRONOGRAMAS"
export function fetchCronogramas() {
    return {
        type: EnumCronogramaActions.FETCH_CRONOGRAMAS,
        payload: interactor.getAll()
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
        payload: interactor.getCronogramaById(id)
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
export function createCronograma(props: any, tokenFromStorage: any) {
    return {
        type: EnumCronogramaActions.CREATE_CRONOGRAMA,
        payload: interactor.createCronograma(props, tokenFromStorage)
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
        payload: interactor.updateCronograma(c)
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