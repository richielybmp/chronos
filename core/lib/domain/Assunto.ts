import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Revisao } from "./Revisao";
import { Material } from "./Material";
import { Exercicio } from "./Exercicio";

export class Assunto extends DtoCodigoDescricao {
    private _materiais: Material[]
    private _revisoes: Revisao[]
    private _exercicios: Exercicio[]
    private _anotacao: string

    constructor(
        codigo: string,
        descricao: string,
        materiais: Material[],
        revisoes: Revisao[],
        exercicios: Exercicio[],
        anotacao: string) {
        super(codigo, descricao)
        this._materiais = materiais
        this._revisoes = revisoes
        this._exercicios = exercicios
        this._anotacao = anotacao
    }

    public get anotacao(): string {
        return this._anotacao;
    }

    public set anotacao(v: string) {
        this._anotacao = v;
    }

    public get revisoes(): Revisao[] {
        return this._revisoes;
    }

    public set revisoes(v: Revisao[]) {
        this._revisoes = v;
    }

    public get exercicios(): Exercicio[] {
        return this._exercicios;
    }

    public set exercicios(v: Exercicio[]) {
        this._exercicios = v;
    }

    public get materiais(): Material[] {
        return this._materiais;
    }

    public set materiais(v: Material[]) {
        this._materiais = v;
    }
}