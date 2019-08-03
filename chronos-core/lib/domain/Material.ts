import { Artefato } from "./Artefato";

export class Material extends Artefato {
    public minutos: number;

    constructor(minutos: number) {
        super()
        this.minutos = minutos
    }
}