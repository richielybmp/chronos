import { Cronograma } from "../domain";

export class CronogramaRepository {

    cronogramas: Cronograma[] = new Array<Cronograma>();

    constructor() {
    }

    get(id: number) { }

    insert(cronograma: Cronograma) {
        //mock
        this.cronogramas.push(cronograma);
    }

    update(cronograma: Cronograma) { }

    delete(id: number) { }

    getAll(): Cronograma[] {
        return this.cronogramas;
    }
}