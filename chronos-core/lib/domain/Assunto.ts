import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Revisao } from "./Revisao";
import { Material } from "./Material";
import { Exercicio } from "./Exercicio";

export class Assunto extends DtoCodigoDescricao {
    public materiais: Material[]
    public revisoes: Revisao[]
    public exercicios: Exercicio[]
    public anotacao: string
    public disciplina_uuid: string = ''

    constructor(
        uuid: string,
        disciplina_uuid: string,
        descricao: string,
        materiais: Material[],
        revisoes: Revisao[],
        exercicios: Exercicio[],
        anotacao: string) {
        super(uuid, descricao)
        this.materiais = materiais
        this.revisoes = revisoes
        this.exercicios = exercicios
        this.anotacao = anotacao
        this.disciplina_uuid = disciplina_uuid
    }
}