import { DtoCodigoDescricao } from "./DtoCodigoDescricao";

export class Exercicio extends DtoCodigoDescricao {
    private _quantidade: number
    private _acertos: number

    constructor(codigo: string, descricao: string, quantidade: number, acertos: number) {
        super(codigo, descricao)
        this._quantidade = quantidade
        this._acertos = acertos
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(v: number) {
        this._quantidade = v;
    }

    public get acertos(): number {
        return this._acertos;
    }

    public set acertos(v: number) {
        this._acertos = v;
    }
}