import { Artefato } from "./Artefato";

export class Exercicio extends Artefato {
    public quantidade: number;
    public acertos: number;
    public uuid: string = '';
    public descricao: string = '';

    constructor(uuid: string, descricao: string, quantidade: number, acertos: number) {
        super()
        this.uuid = uuid
        this.descricao = descricao
        this.quantidade = quantidade
        this.acertos = acertos
    }
}