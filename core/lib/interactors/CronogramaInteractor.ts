import { Cronograma } from "../domain";
import { CronogramaRepository } from "../storage/CronogramaRepository";

export class CronogramaInteractor {
    cronogramaRepository: CronogramaRepository;

    constructor() {
        this.cronogramaRepository = new CronogramaRepository();
    }

    insert(cronograma: Cronograma) {
        return this.cronogramaRepository.insert(cronograma);
    }

    getAll(): Cronograma[] {
        return this.cronogramaRepository.getAll();
    }
}