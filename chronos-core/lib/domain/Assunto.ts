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
}