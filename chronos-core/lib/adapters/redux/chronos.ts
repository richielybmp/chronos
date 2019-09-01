import { EnumCronogramaActions, Material, Revisao, EnumEscopo, Exercicio } from "../../domain";
import { CronogramaActionsType } from "../actions/cronogramaActions";
import { ChronosStateType } from "../../frameworks";
import { CronogramaRepository } from "../../storage";
import _ = require("lodash");

const repository = new CronogramaRepository();

const INITIAL_STATE_CRONOGRAMAS = { cronogramas: [], error: null, loading: false }
const INITIAL_STATE_NOVO_CRONOGRAMA = { old: null, cronograma: null, error: null, loading: false }
const INITIAL_STATE_ASSUNTO_ON_DETAIL = { old: null, assunto: null, error: null, loading: false }

const INITIAL_STATE = {
    cronogramasList: INITIAL_STATE_CRONOGRAMAS,
    novoCronograma: INITIAL_STATE_NOVO_CRONOGRAMA,
    cronogramaOnDetail: INITIAL_STATE_NOVO_CRONOGRAMA,
    assuntoOnDetail: INITIAL_STATE_ASSUNTO_ON_DETAIL,
};

export const chronosReducer = (
    state: ChronosStateType = INITIAL_STATE,
    action: CronogramaActionsType
): ChronosStateType => {
    let error;
    let cronograma;
    let assunto_atualizado;
    switch (action.type) {
        //#region 'fetch cronogramas'
        case EnumCronogramaActions.FETCH_CRONOGRAMAS:
            return {
                ...state,
                cronogramasList: { cronogramas: [], error: null, loading: true }
            };
        case EnumCronogramaActions.FETCH_CRONOGRAMAS_SUCCESS:
            let cronogramas = repository.cronogramasToDomain(action.payload.cronogramas)
            return {
                ...state,
                cronogramasList: { cronogramas: cronogramas, error: null, loading: false },
                cronogramaOnDetail: INITIAL_STATE_NOVO_CRONOGRAMA
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
            cronograma = state.cronogramasList.cronogramas.find(x => x.uuid == action.payload)
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, cronograma: cronograma, loading: true }
            };
        case EnumCronogramaActions.FETCH_CRONOGRAMA_SUCCESS:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, loading: false }
            };
        case EnumCronogramaActions.FETCH_CRONOGRAMA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, cronograma: null, error: error, loading: false }
            };
        //#endregion

        //#region 'create cronograma'
        case EnumCronogramaActions.CREATE_CRONOGRAMA:
            return {
                ...state,
                novoCronograma: { ...state.novoCronograma, loading: true }
            };
        case EnumCronogramaActions.CREATE_CRONOGRAMA_SUCCESS:
            var cronogramas_temp = state.cronogramasList.cronogramas;
            var novo_cronograma = repository.cronogramasToDomain([action.payload.cronograma])[0]

            return {
                ...state,
                cronogramasList: { cronogramas: [...cronogramas_temp, novo_cronograma], error: null, loading: false },
                novoCronograma: { old: null, cronograma: action.payload, error: null, loading: false }
            };
        case EnumCronogramaActions.CREATE_CRONOGRAMA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                novoCronograma: { old: null, cronograma: null, error: error, loading: false }
            };
        case EnumCronogramaActions.RESET_CRONOGRAMA:
            return {
                ...state,
                novoCronograma: { old: null, cronograma: null, error: null, loading: false }
            };
        //#endregion

        //#region 'UPDATE cronograma'
        case EnumCronogramaActions.UPDATE_CRONOGRAMA:
            var cronograma_antigo = state.cronogramaOnDetail.cronograma
            var cronograma_update = repository.cronogramasToDomain([action.payload.cronograma])[0]

            if (cronograma_antigo)
                cronograma_update.disciplinas = cronograma_antigo.disciplinas

            return {
                ...state,
                cronogramaOnDetail: {
                    old: cronograma_antigo,
                    cronograma: cronograma_update,
                    loading: true,
                    error: false
                }
            };
        case EnumCronogramaActions.UPDATE_CRONOGRAMA_SUCCESS:
            cronograma = repository.updateCronograma(state.cronogramaOnDetail.cronograma, action.payload)
            return {
                ...state,
                cronogramaOnDetail: {
                    ...state.cronogramaOnDetail,
                    cronograma: cronograma,
                    error: null,
                    loading: false
                },
            };
        case EnumCronogramaActions.UPDATE_CRONOGRAMA_FAILURE:
            error = action.payload || { message: action.payload.message };
            const old = state.cronogramaOnDetail.old;
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, cronograma: old, error, loading: false }
            };
        // #endregion

        // #region 'DELETE cronograma'
        case EnumCronogramaActions.DELETE_CRONOGRAMA:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: null, loading: true }
            }
        case EnumCronogramaActions.DELETE_CRONOGRAMA_SUCCESS:
            return {
                ...state,
                cronogramaOnDetail: { cronograma: null, old: null, error: null, loading: false }
            }
        case EnumCronogramaActions.DELETE_CRONOGRAMA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: error, loading: false }
            }
        //#endregion

        // #region 'CREATE disciplina'
        case EnumCronogramaActions.CREATE_DISCIPLINA:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: null, loading: true }
            }
        case EnumCronogramaActions.CREATE_DISCIPLINA_SUCCESS:
            var cronograma_atual = state.cronogramaOnDetail.cronograma
            var cronograma_atualizado = null

            if (cronograma_atual)
                cronograma_atualizado = repository.convertaNovaDisciplina(cronograma_atual, action.payload.disciplina)

            return {
                ...state,
                cronogramaOnDetail: { cronograma: cronograma_atualizado, old: null, error: null, loading: false }
            }
        case EnumCronogramaActions.CREATE_DISCIPLINA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: error, loading: false }
            }
        //#endregion

        // #region 'DELETE disciplina'
        case EnumCronogramaActions.DELETE_DISCIPLINA:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: null, loading: true }
            }
        case EnumCronogramaActions.DELETE_DISCIPLINA_SUCCESS:
            //{disciplina, message, success}
            var uuid_delete = action.payload.disciplina.uuid
            cronograma = state.cronogramaOnDetail.cronograma;

            if (cronograma) {
                var listaDeDisciplinas = cronograma.disciplinas;

                listaDeDisciplinas.forEach((d, i) => {
                    if (d.uuid == uuid_delete) {
                        listaDeDisciplinas.splice(i, 1);
                    }
                })
                cronograma.disciplinas = listaDeDisciplinas;
            }

            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, cronograma: cronograma, error: null, loading: false }
            }
        case EnumCronogramaActions.DELETE_DISCIPLINA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: error, loading: false }
            }
        //#endregion

        // #region 'UPDATE disciplina'
        case EnumCronogramaActions.UPDATE_DISCIPLINA:
            var cronograma_antigo = state.cronogramaOnDetail.cronograma
            var disciplina_atualizada = action.payload.disciplina

            var cronograma_novo = cronograma_antigo
            if (cronograma_novo)
                repository.convertDisciplina(cronograma_novo, disciplina_atualizada)

            return {
                ...state,
                cronogramaOnDetail: {
                    ...state.cronogramaOnDetail,
                    cronograma: cronograma_novo,
                    old: cronograma_antigo,
                    error: null,
                    loading: true
                }
            }
        case EnumCronogramaActions.UPDATE_DISCIPLINA_SUCCESS:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: null, loading: false }
            }
        case EnumCronogramaActions.UPDATE_DISCIPLINA_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, cronograma: old, error: error, loading: false }
            }
        //#endregion

        // #region 'CREATE assunto'
        case EnumCronogramaActions.CREATE_ASSUNTO:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: null, loading: true }
            }
        case EnumCronogramaActions.CREATE_ASSUNTO_SUCCESS:
            var cronograma_atual = state.cronogramaOnDetail.cronograma

            if (cronograma_atual) {
                var novo_assunto = repository.convertaNovoAssunto(action.payload.assunto)
                var vinculo = cronograma_atual.disciplinas.find(d => d.uuid == novo_assunto.disciplina_uuid)

                if (vinculo) {
                    vinculo.assuntos.push(novo_assunto)
                }
            }
            return {
                ...state,
                cronogramaOnDetail: { cronograma: cronograma_atual, old: null, error: null, loading: false }
            }
        case EnumCronogramaActions.CREATE_ASSUNTO_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: error, loading: false }
            }
        //#endregion

        // #region 'FETCH assunto'
        case EnumCronogramaActions.FETCH_ASSUNTO:
            return {
                ...state,
                assuntoOnDetail: {
                    ...state.assuntoOnDetail,
                    loading: true
                }
            }
        case EnumCronogramaActions.FETCH_ASSUNTO_SUCCESS:
            assuntoDetalhe = repository.convertaAssunto(action.payload.assunto[0]);
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, assunto: assuntoDetalhe, loading: false }
            }
        case EnumCronogramaActions.FETCH_ASSUNTO_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, error: error, loading: false }
            }
        //#endregion

        // #region 'UPDATE assunto'
        case EnumCronogramaActions.UPDATE_ASSUNTO:
            return {
                ...state,
                assuntoOnDetail: {
                    ...state.assuntoOnDetail,
                    loading: true
                }
            }
        case EnumCronogramaActions.UPDATE_ASSUNTO_SUCCESS:
            var assuntoDetalhe = state.assuntoOnDetail.assunto;
            var cronogramaDetalhe = state.cronogramaOnDetail.cronograma;

            var atual = action.payload.assunto;

            if (assuntoDetalhe) {
                assuntoDetalhe.descricao = atual.descricao;
            }

            if (cronogramaDetalhe && assuntoDetalhe) {
                var disc_uuid = assuntoDetalhe.disciplina_uuid;
                var disc = cronogramaDetalhe.disciplinas.find(x => x.uuid == disc_uuid);
                if (disc) {
                    var obj_assunto = disc.assuntos.find(x => x.uuid == atual.uuid);
                    if (obj_assunto) {
                        obj_assunto.descricao = atual.descricao;
                    }
                }
            }

            return {
                ...state,
                assuntoOnDetail: {
                    ...state.assuntoOnDetail,
                    assunto: assuntoDetalhe,
                    loading: false
                }
            }
        case EnumCronogramaActions.UPDATE_ASSUNTO_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, error: error, loading: false }
            }
        //#endregion

        // #region 'DELETE assunto'
        case EnumCronogramaActions.DELETE_ASSUNTO:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: null, loading: true }
            }
        case EnumCronogramaActions.DELETE_ASSUNTO_SUCCESS:
            var assunto_delete = action.payload.assunto
            cronograma = state.cronogramaOnDetail.cronograma

            if (cronograma) {
                var disciplina = cronograma.disciplinas.find(d => d.uuid == assunto_delete.disciplina_uuid)
                if (disciplina) {
                    var assuntos = disciplina.assuntos;
                    assuntos.forEach((a, i) => {
                        if (a.uuid == assunto_delete.uuid) {
                            assuntos.splice(i, 1);
                        }
                    })
                }
            }

            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: null, loading: false }
            }
        case EnumCronogramaActions.DELETE_ASSUNTO_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: error, loading: false }
            }
        //#endregion

        // #region 'CREATE EXERCICIO'
        case EnumCronogramaActions.CREATE_EXERCICIO:
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, error: null, loading: true }
            }
        case EnumCronogramaActions.CREATE_EXERCICIO_SUCCESS:
            assunto_atualizado = state.assuntoOnDetail.assunto

            if (assunto_atualizado) {
                assunto_atualizado.artefatos.push(repository.convertaExercicio(action.payload.exercicio));
            }

            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, assunto: assunto_atualizado, error: null, loading: false }
            }
        case EnumCronogramaActions.CREATE_EXERCICIO_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, error: error, loading: false }
            }
        // #endregion

        // #region 'CREATE MATERIAL'
        case EnumCronogramaActions.CREATE_MATERIAL:
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, error: null, loading: true }
            }
        case EnumCronogramaActions.CREATE_MATERIAL_SUCCESS:
            assunto_atualizado = state.assuntoOnDetail.assunto

            if (assunto_atualizado) {
                assunto_atualizado.artefatos.push(repository.convertaMaterial(action.payload.material));
            }

            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, assunto: assunto_atualizado, error: null, loading: false }
            }
        case EnumCronogramaActions.CREATE_MATERIAL_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, error: error, loading: false }
            }
        // #endregion

        // #region 'CREATE REVISAO'
        case EnumCronogramaActions.CREATE_REVISAO:
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, error: null, loading: true }
            }
        case EnumCronogramaActions.CREATE_REVISAO_SUCCESS:
            assunto_atualizado = state.assuntoOnDetail.assunto

            if (assunto_atualizado) {
                assunto_atualizado.artefatos.push(repository.convertaRevisao(action.payload.revisao));
            }

            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, assunto: assunto_atualizado, error: null, loading: false }
            }
        case EnumCronogramaActions.CREATE_REVISAO_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, error: error, loading: false }
            }
        // #endregion

        // #region 'UPDATE ARTEFATO'
        case EnumCronogramaActions.UPDATE_ARTEFATO:
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, error: null, loading: true }
            }
        case EnumCronogramaActions.UPDATE_ARTEFATO_SUCCESS:
            assunto_atualizado = state.assuntoOnDetail.assunto;

            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, assunto: assunto_atualizado, error: null, loading: false }
            }
        case EnumCronogramaActions.UPDATE_ARTEFATO_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, error: error, loading: false }
            }
        // #endregion

        // #region 'DELETE ARTEFATO'
        case EnumCronogramaActions.DELETE_ARTEFATO:
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, error: null, loading: true }
            }
        case EnumCronogramaActions.DELETE_ARTEFATO_SUCCESS:
            var artefato_delete = obtenhaIDArtefatoDeletado(action.payload);
            var assuntoDetalhe = state.assuntoOnDetail.assunto;
            var cronogramaDetalhe = state.cronogramaOnDetail.cronograma;

            // removendo do assunto detalhe
            if (assuntoDetalhe) {
                _.remove(assuntoDetalhe.artefatos, (el) => {
                    return el.uuid == artefato_delete.uuid;
                });
            }

            if (cronogramaDetalhe && assuntoDetalhe) {
                var disc_uuid = assuntoDetalhe.disciplina_uuid;
                var disc = cronogramaDetalhe.disciplinas.find(x => x.uuid == disc_uuid);
                if (disc) {
                    var obj_assunto = disc.assuntos.find(x => x.uuid == artefato_delete.assunto_uuid);
                    if (obj_assunto) {
                        _.remove(obj_assunto.artefatos, (el) => {
                            return el.uuid == artefato_delete;
                        });
                    }
                }
            }

            return {
                ...state,
                assuntoOnDetail: {
                    ...state.assuntoOnDetail,
                    assunto: assuntoDetalhe,
                    loading: false
                }
            }
        case EnumCronogramaActions.DELETE_ARTEFATO_FAILURE:
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                assuntoOnDetail: { ...state.assuntoOnDetail, error: error, loading: false }
            }
        //#endregion

        //#region 'RESET'
        case EnumCronogramaActions.CLEAR_ERROR:
            return {
                ...state,
                cronogramaOnDetail: { ...state.cronogramaOnDetail, error: null },
                assuntoOnDetail: { ...state.assuntoOnDetail, error: null },
                novoCronograma: { ...state.novoCronograma, error: null }
            }

        case EnumCronogramaActions.RESET_ASSUNTO:
            return {
                ...state,
                assuntoOnDetail: { old: null, assunto: null, error: null, loading: false }
            }

        case EnumCronogramaActions.CLEAR_STATE:
            return INITIAL_STATE;

        //#endregion

        default:
            return state;
    }
}

/*
Método responsável por identificar a resposta da action de 
DELETE ARTEFATO e atualizar os artefatos do state.
*/
const obtenhaIDArtefatoDeletado = (artefato: any) => {

    if (artefato.material) {
        return artefato.material;
    }
    else if (artefato.revisao) {
        return artefato.revisao;
    }
    else if (artefato.exercicio) {
        return artefato.exercicio;
    }

}