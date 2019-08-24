import { Assunto } from '../domain/Assunto';
import api from '../services/api';
import { Exercicio, Revisao, Material } from '..';

export class AssuntoInteractor {

    constructor() {
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
        )
    }

    // DELETE
    // '/assuntos'
    // id: string
    deleteAssuntoById(id: string) {
        return api.delete(`/assuntos/${id}`)
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
    createExercicio(exercicio: Exercicio) {
        return api.post(`/assunto/artefato/${exercicio.uuid_assunto}`,
            {
                'tipo': 1,
                'data': exercicio.data,
                'total': exercicio.quantidade,
                'acertos': exercicio.acertos,
            }
        )
    }

    createRevisao(revisao: Revisao) {
        return api.post(`/assunto/artefato/${revisao.uuid_assunto}`,
            {
                'tipo': 2,
                'data': revisao.data,
                // 'quantidade': revisao.quantidade,
            }
        )
    }

    createMaterial(material: Material) {
        return api.post(`/assunto/artefato/${material.uuid_assunto}`,
            {
                'tipo': 3,
                'data': material.data,
                'minutos': material.minutos,
            }
        )
    }

}