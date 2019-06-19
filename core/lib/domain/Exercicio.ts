import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Artefato } from "./Artefato";

export class Exercicio extends Artefato {
    private _quantidade: number;
    private _acertos: number;
    private _codigo: string = '';
    private _descricao: string = '';

    constructor(codigo: string, descricao: string, quantidade: number, acertos: number) {
        super()
        this._codigo = codigo
        this._descricao = descricao
        this._quantidade = quantidade
        this._acertos = acertos
    }

    public get codigo(): string {
        return this._codigo;
    }

    public set codigo(value: string) {
        this._codigo = value;
    }

    public get descricao(): string {
        return this._descricao;
    }

    public set descricao(value: string) {
        this._descricao = value;
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