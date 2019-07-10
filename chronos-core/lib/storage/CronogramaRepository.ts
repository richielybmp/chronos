import { Cronograma } from "../domain";

export class CronogramaRepository {

    constructor() {
    }

    cronogramasToDomain(payload: any): any {

        let cronogramas: Cronograma[] = []

        if (payload != null) {
            payload.forEach((el: any) => {
                cronogramas.push(
                    new Cronograma(el.uuid, el.descricao, el.titulo, el.inicio, el.fim, [])
                )
            });
        }

        return cronogramas;
    }

}