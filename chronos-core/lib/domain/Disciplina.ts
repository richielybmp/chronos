import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Assunto } from "./Assunto";

export class Disciplina extends DtoCodigoDescricao {
    public assuntos: Assunto[];
    public nome: string;
    public cronograma_uuid: string;

    constructor(uuid: string, cronograma_uuid: string, nome: string, descricao: string) {
        super(uuid, descricao)
        this.cronograma_uuid = cronograma_uuid;
        this.assuntos = [];
        this.nome = nome;
    }
}