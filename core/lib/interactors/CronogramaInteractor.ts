import axios, { AxiosPromise } from 'axios';
import { Cronograma } from "../domain";
//import { CronogramaRepository } from "../storage/CronogramaRepository";

const API_URL = 'https://jsonplaceholder.typicode.com'

export class CronogramaInteractor {
    //cronogramaRepository: CronogramaRepository;

    constructor() {
        //this.cronogramaRepository = new CronogramaRepository();
    }

    insert(cronograma: Cronograma) {
        //return this.cronogramaRepository.insert(cronograma);
    }

    getAll(): AxiosPromise<any> {
        return axios({
            method: 'GET',
            url: `${API_URL}/todos`,
            headers: []
        });
    }

    getCronogramaById(id: string): AxiosPromise<any> {
        return axios.get(`${API_URL}/todos/${id}`);
    }
}