import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Artefato } from "./Artefato";

export class Material extends Artefato {
    public porcentagem: number
    public codigo: string = '';
    public descricao: string = '';

    constructor(codigo: string, descricao: string, porcentagem: number) {
        super()
        this.porcentagem = porcentagem
    }

    // public get codigo(): string {
    //     return this._codigo;
    // }

    // public set codigo(value: string) {
    //     this._codigo = value;
    // }

    // public get descricao(): string {
    //     return this._descricao;
    // }

    // public set descricao(value: string) {
    //     this._descricao = value;
    // }

    // public get porcentagem(): number {
    //     return this._porcentagem;
    // }

    // public set porcentagem(v: number) {
    //     this._porcentagem = v;
    // }
}