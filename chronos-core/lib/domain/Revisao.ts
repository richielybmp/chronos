import { EnumEscopo } from "./enumeradores/EnumEscopo";
import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Artefato } from "./Artefato";

export class Revisao extends Artefato {
    public escopo: EnumEscopo
    public uuid: string = '';
    public descricao: string = '';

    constructor(descricao: string, escopo: EnumEscopo, tipoArtefato: number) {
        super(tipoArtefato)
        this.escopo = escopo
    }
}