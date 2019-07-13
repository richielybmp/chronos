import axios, { AxiosPromise } from 'axios';
import { Cronograma } from "../domain";
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
                "inicio": cronograma.dataInicio,
                "fim": cronograma.dataFim
            }
        )
    }

    // PUT
    // '/cronogramas/<id>'
    // cronograma: Cronograma
    updateCronograma(cronograma: Cronograma) {
        return api.put(`/cronogramas/${cronograma.codigo}`,
            {
                "titulo": cronograma.titulo,
                "descricao": cronograma.descricao,
                "inicio": cronograma.dataInicio,
                "fim": cronograma.dataFim
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