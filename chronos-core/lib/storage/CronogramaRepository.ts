import { Assunto } from '../domain/Assunto';
import { Cronograma, Disciplina, Artefato, Material, Exercicio, Revisao } from "../domain";

export class CronogramaRepository {

    constructor() {
    }

    convertaAssunto(assunto: any): Assunto {
        let objAssunto = new Assunto(assunto.uuid, assunto.disciplina_uuid, assunto.descricao);
        objAssunto.anotacao = assunto.anotacao;

        objAssunto.artefatos = [];
        objAssunto.artefatos.push(...this.convertaExercicios(assunto.exercicios));
        objAssunto.artefatos.push(...this.convertaMateriais(assunto.materiais));
        objAssunto.artefatos.push(...this.convertaRevisoes(assunto.revisoes));


        return objAssunto;
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
            let assunto = new Assunto(el.uuid, el.disciplina_uuid, el.descricao);
            assunto.anotacao = el.anotacao;

            assunto.artefatos = [];
            assunto.artefatos.push(...this.convertaExercicios(el.exercicios));
            assunto.artefatos.push(...this.convertaMateriais(el.materiais));
            assunto.artefatos.push(...this.convertaRevisoes(el.revisoes));

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

    convertaMateriais(materiais: any[]) {
        let listaDeMateriais: Material[] = [];

        materiais.forEach((el: any) => {
            listaDeMateriais.push(this.convertaMaterial(el));
        });

        return listaDeMateriais;
    }

    convertaMaterial(material: any) {
        let novo_material = new Material(
            material.uuid,
            material.assunto_uuid,
            material.data,
            material.descricao,
            material.time,
            material.escopo,
            0
        );

        return novo_material;
    }

    convertaExercicios(exercicios: any[]) {
        let listaDeExercicios: Exercicio[] = [];

        exercicios.forEach((el: any) => {
            listaDeExercicios.push(this.convertaExercicio(el));
        });

        return listaDeExercicios;
    }

    convertaExercicio(exercicio: any) {
        let novo_exercicio = new Exercicio(
            exercicio.uuid,
            exercicio.assunto_uuid,
            exercicio.data,
            exercicio.descricao,
            exercicio.quantidade,
            exercicio.acertos,
            2
        );

        return novo_exercicio;
    }

    convertaRevisoes(revisoes: any[]) {
        let listaDeRevisoes: Revisao[] = [];

        revisoes.forEach((el: any) => {
            listaDeRevisoes.push(this.convertaRevisao(el));
        });

        return listaDeRevisoes;
    }

    convertaRevisao(revisao: any) {
        let nova_revisao = new Revisao(
            revisao.uuid,
            revisao.assunto_uuid,
            revisao.data,
            revisao.descricao,
            revisao.escopo,
            1
        );

        return nova_revisao;
    }
}