import { Artefato } from "./Artefato";

export class Material extends Artefato {
    public minutos: number;

    constructor(minutos: number, tipoMaterial: number) {
        super(tipoMaterial)
        this.minutos = minutos
    }
}