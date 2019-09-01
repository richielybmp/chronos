import { EnumEscopo } from "./enumeradores/EnumEscopo";
import { Artefato } from "./Artefato";

export class Revisao extends Artefato {
    public escopo: EnumEscopo

    constructor(uuid: string,
        uuid_assunto: string,
        data: string,
        descricao: string,
        escopo: EnumEscopo,
        tipoArtefato: number
    ) {
        super(uuid, uuid_assunto, data, descricao, tipoArtefato);

        this.escopo = escopo;
    }
}