import { AssuntoInteractor } from '../../interactors/AssuntoInteractor';
import { Exercicio, Revisao, Material, Artefato, EnumCronogramaActions, Assunto } from '../../domain';

const interactorAssunto = new AssuntoInteractor();

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
        payload: interactorAssunto.getAssunto(idDisciplina, idAssunto)
    };
}

export function fetchAssuntoSuccess(data: any) {
    return {
        type: EnumCronogramaActions.FETCH_ASSUNTO_SUCCESS,
        payload: data
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

//#region "Actions para CREATE MATERIAL"
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

//#region "Actions para UPDATE ARTEFATO"
export function updateArtefato(artefato: Artefato) {
    return {
        type: EnumCronogramaActions.UPDATE_ARTEFATO,
        payload: interactorAssunto.updateArtefato(artefato)
    };
}

export function updateArtefatoSuccess(data: any) {
    return {
        type: EnumCronogramaActions.UPDATE_ARTEFATO_SUCCESS,
        payload: data
    };
}

export function updateArtefatoFailure(error: any) {
    return {
        type: EnumCronogramaActions.UPDATE_ARTEFATO_FAILURE,
        payload: error
    };
}
//#endregion

//#region 'Actions para DELETE ARTEFATO'
export function deleteArtefato(id: string, tipoArtefato: number) {
    return {
        type: EnumCronogramaActions.DELETE_ARTEFATO,
        payload: interactorAssunto.deleteArtefato(id, tipoArtefato)
    }
}

export function deleteArtefatoSuccess(data: any) {
    return {
        type: EnumCronogramaActions.DELETE_ARTEFATO_SUCCESS,
        payload: data
    };
}

export function deleteArtefatoFailure(error: any) {
    return {
        type: EnumCronogramaActions.DELETE_ARTEFATO_FAILURE,
        payload: error
    };
}
//#endregion

//#region "Actions para CLEAR"
export function clearAssuntoOnDetail() {
    return {
        type: EnumCronogramaActions.RESET_ASSUNTO,
    };
}
//#endregion
