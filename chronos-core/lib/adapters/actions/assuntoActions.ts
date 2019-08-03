import { AssuntoInteractor } from '../../interactors/AssuntoInteractor';
import { EnumCronogramaActions, Assunto, } from "../..";

const interactorAssunto = new AssuntoInteractor()

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

//#region "Actions para DELETE ASSUNTO POR ID"
export function deleteAssunto(id: string) {
    return {
        type: EnumCronogramaActions.DELETE_ASSUNTO,
        payload: interactorAssunto.deleteAssuntoById(id)
    };
}

export function deleteAssuntoSuccess(data: any) {
    return {
        type: EnumCronogramaActions.DELETE_ASSUNTO_SUCCESS,
        payload: data
    };
}

export function deleteAssuntoFailure(error: any) {
    return {
        type: EnumCronogramaActions.DELETE_ASSUNTO_FAILURE,
        payload: error
    };
}
//#endregion

//#region "Actions para UPDATE ASSUNTO POR ID"
export function updateAssunto(assunto: Assunto) {
    return {
        type: EnumCronogramaActions.UPDATE_ASSUNTO,
        payload: interactorAssunto.updateAssunto(assunto)
    };
}

export function updateAssuntoSuccess(data: any) {
    return {
        type: EnumCronogramaActions.UPDATE_ASSUNTO_SUCCESS,
        payload: data
    };
}

export function updateAssuntoFailure(error: any) {
    return {
        type: EnumCronogramaActions.UPDATE_ASSUNTO_FAILURE,
        payload: error
    };
}
//#endregion

//#region "Actions para UPDATE ASSUNTO POR ID"
export function clearAssuntoOnDetail() {
    return {
        type: EnumCronogramaActions.RESET_ASSUNTO,
    };
}

//#endregion
