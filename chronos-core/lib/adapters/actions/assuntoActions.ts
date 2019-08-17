import { AssuntoInteractor } from '../../interactors/AssuntoInteractor';
import { EnumCronogramaActions, Assunto, } from "../..";
import { Exercicio, Revisao, Material } from '../../domain';

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

//#region "Actions para CREATE EXERCICIO"
export function createExercicio(exercicio: Exercicio) {
    return {
        type: EnumCronogramaActions.CREATE_EXERCICIO,
        payload: interactorAssunto.createExercicio(exercicio)
    };
}

export function createExercicioSuccess(data: any) {
    return {
        type: EnumCronogramaActions.CREATE_EXERCICIO_SUCCESS,
        payload: data
    };
}

export function createExercicioFailure(error: any) {
    return {
        type: EnumCronogramaActions.CREATE_EXERCICIO_FAILURE,
        payload: error
    };
}
//#endregion

//#region "Actions para CREATE REVISAO"
export function createRevisao(revisao: Revisao) {
    return {
        type: EnumCronogramaActions.CREATE_REVISAO,
        payload: interactorAssunto.createRevisao(revisao)
    };
}

export function createRevisaoSuccess(data: any) {
    return {
        type: EnumCronogramaActions.CREATE_REVISAO_SUCCESS,
        payload: data
    };
}

export function createRevisaoFailure(error: any) {
    return {
        type: EnumCronogramaActions.CREATE_REVISAO_FAILURE,
        payload: error
    };
}
//#endregion


//#region "Actions para CREATE REVISAO"
export function createMaterial(material: Material) {
    return {
        type: EnumCronogramaActions.CREATE_MATERIAL,
        payload: interactorAssunto.createMaterial(material)
    };
}

export function createMaterialSuccess(data: any) {
    return {
        type: EnumCronogramaActions.CREATE_MATERIAL_SUCCESS,
        payload: data
    };
}

export function createMaterialFailure(error: any) {
    return {
        type: EnumCronogramaActions.CREATE_MATERIAL_FAILURE,
        payload: error
    };
}
//#endregion

//#region "Actions para CLEAR "
export function clearAssuntoOnDetail() {
    return {
        type: EnumCronogramaActions.RESET_ASSUNTO,
    };
}

//#endregion
