import { Material } from './Material';
import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Artefato } from "./Artefato";
import { Exercicio } from './Exercicio';
import { Revisao } from './Revisao';

export class Assunto extends DtoCodigoDescricao {
    public artefatos: Artefato[];
    public anotacao: string;
    public disciplina_uuid: string;

    constructor(
        uuid: string,
        disciplina_uuid: string,
        descricao: string,
    ) {
        super(uuid, descricao)
        this.artefatos = []
        this.disciplina_uuid = disciplina_uuid
        this.anotacao = '';
    }
}