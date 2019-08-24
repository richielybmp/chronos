import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Artefato } from "./Artefato";
import { Material } from './Material';
import { Exercicio } from './Exercicio';
import { Revisao } from './Revisao';

export class Assunto extends DtoCodigoDescricao {
    public artefatos: Artefato[] = [];
    // public materiais: Material[] = [];
    // public exercicios: Exercicio[] = [];
    // public revisoes: Revisao[] = [];
    public anotacao: string;
    public disciplina_uuid: string;

    constructor(
        uuid: string,
        disciplina_uuid: string,
        descricao: string,
    ) {
        super(uuid, descricao)
        this.disciplina_uuid = disciplina_uuid
        this.anotacao = '';
    }
}