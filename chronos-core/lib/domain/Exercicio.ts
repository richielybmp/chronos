import { Artefato } from "./Artefato";

export class Exercicio extends Artefato {
    public quantidade: number;
    public acertos: number;

    constructor(quantidade?: number, acertos?: number, tipoArtefato?: number);
    constructor(quantidade: number, acertos: number, tipoArtefato: number) {
        super(tipoArtefato)
        this.quantidade = quantidade
        this.acertos = acertos
    }
}