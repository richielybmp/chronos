import { Assunto } from '../domain/Assunto';
import api from '../services/api';

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
                "titulo": assunto.descricao,
            }
        );
    }
}