import axios, { AxiosPromise } from 'axios';
import { Cronograma } from "../domain";
import api from '../services/api';

const API_URL = 'https://jsonplaceholder.typicode.com'

export class CronogramaInteractor {

    //cronogramaRepository: CronogramaRepository;

    constructor() {
        //this.cronogramaRepository = new CronogramaRepository();
    }

    insert(cronograma: Cronograma) {
        //return this.cronogramaRepository.insert(cronograma);
    }

    // GET
    // '/cronogramas'
    getAll(): AxiosPromise<any> {
        return api.get("/cronogramas");
    }

    getCronogramaById(id: string): AxiosPromise<any> {
        // ao obter o cronograma, trazer a lista de disciplinas e assuntos.
        return api.get(`/cronograma/${id}`);
    }

    createCronograma(props: any, tokenFromStorage: any) {
        console.table('createCronograma:', props, tokenFromStorage)
        return axios({
            method: 'POST',
            data: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            url: `${API_URL}/todos`,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    updateCronograma(c: Cronograma) {
        return axios.get(`${API_URL}/todos`);
        // return axios({
        //     method: 'PUT',
        //     data: JSON.stringify({
        //         title: 'foo',
        //         body: 'bar',
        //         userId: 1
        //     }),
        //     url: `${API_URL}/todos`,
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // })
    }

}