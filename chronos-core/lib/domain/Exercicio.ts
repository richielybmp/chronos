import { Artefato } from "./Artefato";

export class Exercicio extends Artefato {
    public quantidade: number;
    public acertos: number;

    constructor(quantidade?: number, acertos?: number);
    constructor(quantidade: number, acertos: number) {
        super()
        this.quantidade = quantidade
        this.acertos = acertos
    }
}