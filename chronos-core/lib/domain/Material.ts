import { Artefato } from "./Artefato";

export class Material extends Artefato {
    public minutos: number;
    public tipoMaterial: number;

    constructor(
        uuid: string,
        uuid_assunto: string,
        data: string,
        descricao: string,
        minutos: number,
        tipoMaterial: number,
        tipoArtefato: number
    ) {
        super(uuid, uuid_assunto, data, descricao, tipoArtefato);

        this.minutos = minutos;
        this.tipoMaterial = tipoMaterial;
    }
}