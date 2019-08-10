import { Assunto } from '../domain/Assunto';
import { Cronograma, Disciplina } from "../domain";

export class CronogramaRepository {
    convertaAssunto(disciplina: Disciplina, idAssunto: string): any {
        let toModel;
        let assunto = disciplina.assuntos.find(a => a.uuid == idAssunto)

        if (assunto) {
            toModel = new Assunto(assunto.uuid, assunto.disciplina_uuid, assunto.descricao)
            //TODO: atribuir os artefatos
            //toModel.artefatos = assunto.artefatos
        }

        return toModel;
    }

    constructor() {
    }

    // De-Para Cronogramas
    cronogramasToDomain(listaDeCronogramas: any): Cronograma[] {
        let cronogramas: Cronograma[] = [];

        if (listaDeCronogramas != null) {
            listaDeCronogramas.forEach((el: any) => {
                var cronograma = new Cronograma(el.uuid, el.titulo, el.descricao, el.inicio, el.fim, []);

                if (el.disciplinas) {
                    cronograma.disciplinas = this.disciplinasToDomain(el.disciplinas);
                }

                cronogramas.push(cronograma);
            });
        }

        return cronogramas;
    }

    // De-Para Disciplinas
    disciplinasToDomain(listaDeDisciplinas: any): Disciplina[] {
        let disciplinas: Disciplina[] = [];

        listaDeDisciplinas.forEach((el: any) => {
            var disciplina = new Disciplina(el.uuid, el.cronograma_uuid, el.nome, el.descricao);

            if (el.assuntos) {
                disciplina.assuntos = this.assuntosToDomain(el.assuntos);
            }

            disciplinas.push(disciplina);
        });

        return disciplinas;
    }

    // De-Para Assuntos
    assuntosToDomain(listaDeAssuntos: any): Assunto[] {
        let assuntos: Assunto[] = [];

        listaDeAssuntos.forEach((el: any) => {
            var assunto = new Assunto(el.uuid, el.disciplina_uuid, el.descricao);
            assunto.anotacao = el.anotacao;
            assunto.artefatos.push(...el.exercicios)
            assunto.artefatos.push(...el.materiais)
            assunto.artefatos.push(...el.revisoes)

            assuntos.push(assunto);
        });

        return assuntos;
    }

    convertaNovaDisciplina(cronograma: Cronograma, payload: any): Cronograma {
        let nova_disciplina = new Disciplina(payload.uuid, cronograma.uuid, payload.nome, payload.descricao);

        cronograma.disciplinas.push(nova_disciplina);

        return cronograma;
    }

    convertDisciplina(cronograma_novo: Cronograma, disciplina_atualizada: Disciplina) {
        var disciplina_temp = null;

        if (cronograma_novo) {
            disciplina_temp = cronograma_novo.disciplinas.find(d => d.uuid == disciplina_atualizada.uuid);

            if (disciplina_temp) {
                disciplina_temp.nome = disciplina_atualizada.nome;
                disciplina_temp.descricao = disciplina_atualizada.descricao;
            }
        }
    }

    convertaNovoAssunto(payload: any): Assunto {
        let assunto = new Assunto(payload.uuid, payload.disciplina_uuid, payload.descricao)
        return assunto
    }

    updateCronograma(cronogramaDetalhe: Cronograma | null | undefined, atual: Cronograma) {
        if (cronogramaDetalhe) {
            cronogramaDetalhe.titulo = atual.titulo;
            cronogramaDetalhe.descricao = atual.descricao;
            cronogramaDetalhe.inicio = atual.inicio;
            cronogramaDetalhe.fim = atual.fim;
        }
        return cronogramaDetalhe
    }
}