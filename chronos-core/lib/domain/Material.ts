import { Artefato } from "./Artefato";

export class Material extends Artefato {
    public minutos: number;
    public tipoMaterial: number;

    constructor(minutos: number, tipoArtefato: number, tipoMaterial: number) {
        super(tipoArtefato)
        this.minutos = minutos
        this.tipoMaterial = tipoMaterial
    }
}