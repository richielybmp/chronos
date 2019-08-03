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

    cronogramasToDomain(payload: any): Cronograma[] {
        let cronogramas: Cronograma[] = [];

        if (payload != null) {
            payload.forEach((el: Cronograma) => {
                var cronograma = new Cronograma(el.uuid, el.titulo, el.descricao, el.inicio, el.fim, []);

                if (el.disciplinas) {
                    cronograma.disciplinas = el.disciplinas;
                }

                cronogramas.push(cronograma);
            });
        }

        return cronogramas;
    }

    convertaNovaDisciplina(cronograma: Cronograma, payload: any): Cronograma {
        let nova_disciplina = new Disciplina(payload.uuid, payload.nome, payload.descricao, []);

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
}