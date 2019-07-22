import api from '../services/api';
import { Disciplina } from '../domain';

export class DisciplinaInteractor {

    constructor() {
    }

    // POST
    // '/disciplinas'
    // idCronograma: string, disciplina: Disciplina
    createDisciplina(idCronograma: string, disciplina: Disciplina) {
        return api.post('/disciplinas',
            {
                "cronograma_uuid": idCronograma,
                "nome": disciplina.nome,
                "descricao": disciplina.descricao,
            }
        )
    }

    // PUT
    // '/cronogramas/<id>'
    // cronograma: Cronograma
    updateDisciplina(idCronograma: string, disciplina: Disciplina) {
        return api.put(`/disciplinas/${disciplina.uuid}`,
            {
                "cronograma_uuid": idCronograma,
                "nome": disciplina.nome,
                "descricao": disciplina.descricao,
            }
        );
    }

    // DELETE
    // '/disciplinas/id'
    // id: Identificador do cronograma
    deleteDisciplinaById(id: string) {
        return api.delete(`/disciplinas/${id}`)
    }
}