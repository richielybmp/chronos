import { EnumEscopo } from "./enumeradores/EnumEscopo";
import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Artefato } from "./Artefato";

export class Revisao extends Artefato {
    public escopo: EnumEscopo
    public quantidade: number
    public uuid: string = '';
    public descricao: string = '';

    constructor(descricao: string, escopo: EnumEscopo, quantidade: number) {
        super()
        this.escopo = escopo
        this.quantidade = quantidade
    }
}