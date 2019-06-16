import { DtoCodigoDescricao } from "./DtoCodigoDescricao";

export class Material extends DtoCodigoDescricao {
    private _porcentagem: number

    constructor(codigo: string, descricao: string, porcentagem: number) {
        super(codigo, descricao)
        this._porcentagem = porcentagem
    }

    public get porcentagem(): number {
        return this._porcentagem;
    }

    public set porcentagem(v: number) {
        this._porcentagem = v;
    }
}