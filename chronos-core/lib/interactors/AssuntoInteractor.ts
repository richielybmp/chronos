import { Assunto } from '../domain/Assunto';
import api from '../services/api';
import { Exercicio, Revisao, Material, Artefato } from '..';

export class AssuntoInteractor {

    constructor() {
    }

    getAssunto(idDisciplina: string, idAssunto: string) {
        return api.get(`/assuntos/${idAssunto}`);
    }

    // POST
    // '/assuntos'
    // idDisciplina: string, assunto: Disciplina
    createAssunto(assunto: Assunto) {
        return api.post('/assuntos',
            {
                "disciplina_uuid": assunto.disciplina_uuid,
                "descricao": assunto.descricao,
                "anotacao": "Anotação teste"
            }
        );
    }

    // DELETE
    // '/assuntos'
    // id: string
    deleteAssuntoById(id: string) {
        return api.delete(`/assuntos/${id}`);
    }

    // UPDATE
    // '/assuntos'
    // id: string
    updateAssunto(assunto: Assunto) {
        return api.put(`/assuntos/${assunto.uuid}`,
            {
                "descricao": assunto.descricao,
            }
        );
    }

    // POST
    // '/assunto/{id}
    createMaterial(material: Material) {
        return api.post('/artefatos',
            {
                "0": {
                    'assunto_uuid': material.uuid_assunto,
                    'descricao': material.descricao,
                    'escopo': material.tipoMaterial,
                    'data': material.data,
                    'time': material.minutos,
                }
            }
        );
    }

    // POST
    // '/assunto
    createRevisao(revisao: Revisao) {
        return api.post('/artefatos',
            {
                "1": {
                    'assunto_uuid': revisao.uuid_assunto,
                    'data': revisao.data,
                    'escopo': revisao.escopo,
                    'descricao': revisao.descricao
                }
            }
        );
    }

    // POST
    // '/assunto
    createExercicio(exercicio: Exercicio) {
        return api.post('/artefatos',
            {
                "2": {
                    'descricao': exercicio.descricao,
                    'data': exercicio.data,
                    'quantidade': exercicio.quantidade,
                    'acertos': exercicio.acertos,
                    'assunto_uuid': exercicio.uuid_assunto,
                    'escopo': 0
                }
            }
        );
    }

    // DELETE
    // '/artefato/{id}
    deleteArtefato(id: string, tipoArtefato: number) {
        return api.delete(`/artefatos/${this.getTipoArtefato(tipoArtefato)}/${id}`);
    }

    // UPDATE
    // '/artefatos'
    // artefato: Material | Revisão | Exercício
    updateArtefato(artefato: Artefato) {
        const dados = this.ObtenhaDadosArtefato(artefato);
        return api.put(`/artefatos/${artefato.uuid}`, dados);
    }

    getTipoArtefato(tipo: number) {
        switch (tipo) {
            case 0:
                return "material";
            case 1:
                return "revisao";
            case 2:
                return "exercicio";
            default:
                break;
        }
    }

    ObtenhaDadosArtefato(artefato: Artefato) {
        switch (artefato.tipoArtefato) {
            case 0:
                let material = (artefato as Material);
                return {
                    "0": {
                        'data': material.data,
                        'descricao': material.descricao,
                        'escopo': material.tipoMaterial,
                        'time': material.minutos,
                    }
                };
            case 1:
                let revisao = (artefato as Revisao);
                return {
                    "1": {
                        'data': revisao.data,
                        'descricao': revisao.descricao,
                        'escopo': revisao.escopo,
                    }
                };
            case 2:
                let exercicio = (artefato as Exercicio);
                return {
                    "2": {
                        'data': exercicio.data,
                        'descricao': exercicio.descricao,
                        'quantidade': exercicio.quantidade,
                        'acertos': exercicio.acertos,
                    }
                };
        }
    }
}