import { AxiosPromise } from 'axios';
import { Cronograma, Disciplina } from "../domain";
import api from '../services/api';

export class CronogramaInteractor {

    constructor() {
    }

    // GET
    // '/cronogramas'
    getAll(): AxiosPromise<any> {
        return api.get("/cronogramas");
    }

    // GET
    // '/cronograma/completos'
    getAllFull(): AxiosPromise<any> {
        return api.get("/cronograma/completos");
    }

    // GET
    // '/cronogramas/<id>
    // id: Identificador do cronograma
    getCronogramaById(id: string): AxiosPromise<any> {
        // ao obter o cronograma, trazer a lista de disciplinas e assuntos.
        return api.get(`/cronograma-completo/${id}`);
    }

    // POST
    // '/cronogramas'
    // cronograma: Cronograma
    createCronograma(cronograma: Cronograma) {
        return api.post("/cronogramas",
            {
                "titulo": cronograma.titulo,
                "descricao": cronograma.descricao,
                "inicio": cronograma.inicio,
                "fim": cronograma.fim
            }
        )
    }

    // PUT
    // '/cronogramas/<id>'
    // cronograma: Cronograma
    updateCronograma(cronograma: Cronograma) {
        return api.put(`/cronogramas/${cronograma.uuid}`,
            {
                "titulo": cronograma.titulo,
                "descricao": cronograma.descricao,
                "inicio": cronograma.inicio,
                "fim": cronograma.fim
            }
        );
    }

    // DELETE
    // '/cronogramas/id'
    // id: Identificador do cronograma
    deleteCronogramaById(id: string) {
        return api.delete(`/cronogramas/${id}`)
    }
}