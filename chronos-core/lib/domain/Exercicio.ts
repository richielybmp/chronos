import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Artefato } from "./Artefato";

export class Exercicio extends Artefato {
    public quantidade: number;
    public acertos: number;
    public codigo: string = '';
    public descricao: string = '';

    constructor(codigo: string, descricao: string, quantidade: number, acertos: number) {
        super()
        this.codigo = codigo
        this.descricao = descricao
        this.quantidade = quantidade
        this.acertos = acertos
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

    // public get quantidade(): number {
    //     return this._quantidade;
    // }

    // public set quantidade(v: number) {
    //     this._quantidade = v;
    // }

    // public get acertos(): number {
    //     return this._acertos;
    // }

    // public set acertos(v: number) {
    //     this._acertos = v;
    // }
}