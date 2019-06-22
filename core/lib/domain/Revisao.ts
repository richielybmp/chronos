import { EnumEscopo } from "./enumeradores/EnumEscopo";
import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Artefato } from "./Artefato";

export class Revisao extends Artefato {
    public escopo: EnumEscopo
    public quantidade: number
    public codigo: string = '';
    public descricao: string = '';

    constructor(codigo: string, descricao: string, escopo: EnumEscopo, quantidade: number) {
        super()
        this.escopo = escopo
        this.quantidade = quantidade
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

    // public get escopo(): EnumEscopo {
    //     return this._escopo;
    // }

    // public set escopo(v: EnumEscopo) {
    //     this._escopo = v;
    // }

    // public get quantidade(): number {
    //     return this._quantidade;
    // }

    // public set quantidade(v: number) {
    //     this._quantidade = v;
    // }
}