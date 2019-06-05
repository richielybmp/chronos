import { EnumEscopo } from "./enumeradores/EnumEscopo";
import { DtoCodigoDescricao } from "./DtoCodigoDescricao";

export class Revisao extends DtoCodigoDescricao {
    private _escopo: EnumEscopo
    private _quantidade: number

    constructor(codigo: number, descricao: String, escopo: EnumEscopo, quantidade: number) {
        super(codigo, descricao)
        this._escopo = escopo
        this._quantidade = quantidade
    }

    public get escopo(): EnumEscopo {
        return this._escopo;
    }

    public set escopo(v: EnumEscopo) {
        this._escopo = v;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(v: number) {
        this._quantidade = v;
    }
}