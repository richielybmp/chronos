import { Artefato } from "./Artefato";

export class Exercicio extends Artefato {
    public quantidade: number;
    public acertos: number;

    constructor(quantidade?: number, acertos?: number, tipoMaterial?: number);
    constructor(quantidade: number, acertos: number, tipoMaterial: number) {
        super(tipoMaterial)
        this.quantidade = quantidade
        this.acertos = acertos
    }
}