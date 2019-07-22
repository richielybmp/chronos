import { Assunto } from './../domain/Assunto';
import { AxiosPromise } from "axios";
import api from "../services/api";

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
}