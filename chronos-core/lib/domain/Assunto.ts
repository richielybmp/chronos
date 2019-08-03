import { Material } from './Material';
import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Artefato } from "./Artefato";

export class Assunto extends DtoCodigoDescricao {
    public artefatos: Artefato[];
    public disciplina_uuid: string = ''

    constructor(
        uuid: string,
        disciplina_uuid: string,
        descricao: string,
    ) {
        super(uuid, descricao)
        this.artefatos = []
        this.disciplina_uuid = disciplina_uuid
    }
}