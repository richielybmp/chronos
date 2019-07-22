import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Assunto } from "./Assunto";

export class Disciplina extends DtoCodigoDescricao {
    public assuntos: Assunto[];
    public nome: string;
    public cronograma_uuid: string = "";

    constructor(uuid: string, nome: string, descricao: string, assuntos: Assunto[]) {
        super(uuid, descricao)
        this.assuntos = assuntos;
        this.nome = nome;
    }
}