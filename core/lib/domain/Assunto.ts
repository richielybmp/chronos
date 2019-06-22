import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Revisao } from "./Revisao";
import { Material } from "./Material";
import { Exercicio } from "./Exercicio";

export class Assunto extends DtoCodigoDescricao {
    public materiais: Material[]
    public revisoes: Revisao[]
    public exercicios: Exercicio[]
    public anotacao: string

    constructor(
        codigo: string,
        descricao: string,
        materiais: Material[],
        revisoes: Revisao[],
        exercicios: Exercicio[],
        anotacao: string) {
        super(codigo, descricao)
        this.materiais = materiais
        this.revisoes = revisoes
        this.exercicios = exercicios
        this.anotacao = anotacao
    }

    // public get anotacao(): string {
    //     return this._anotacao;
    // }

    // public set anotacao(v: string) {
    //     this._anotacao = v;
    // }

    // public get revisoes(): Revisao[] {
    //     return this._revisoes;
    // }

    // public set revisoes(v: Revisao[]) {
    //     this._revisoes = v;
    // }

    // public get exercicios(): Exercicio[] {
    //     return this._exercicios;
    // }

    // public set exercicios(v: Exercicio[]) {
    //     this._exercicios = v;
    // }

    // public get materiais(): Material[] {
    //     return this._materiais;
    // }

    // public set materiais(v: Material[]) {
    //     this._materiais = v;
    // }
}