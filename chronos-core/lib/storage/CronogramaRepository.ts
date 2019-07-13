import { Cronograma } from "../domain";

export class CronogramaRepository {

    constructor() {
    }

    cronogramasToDomain(payload: any[]): Cronograma[] {

        let cronogramas: Cronograma[] = []

        if (payload != null) {
            payload.forEach((el: any) => {
                var cronograma = new Cronograma(el.uuid, el.titulo, el.descricao, el.inicio, el.fim, [])
                if (el.disciplinas)
                    cronograma.disciplinas = el.disciplinas
                cronogramas.push(cronograma)
            });
        }

        return cronogramas;
    }

}