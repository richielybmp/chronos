import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Disciplina } from "./Disciplina";

export class Cronograma extends DtoCodigoDescricao {
    public inicio: string;
    public fim: string;
    public titulo: string;
    public disciplinas: Disciplina[] = [];

    constructor(
        uuid: string,
        titulo: string,
        descricao: string,
        inicio: string,
        fim: string,
        disciplinas: Disciplina[]) {
        super(uuid, descricao)
        this.titulo = titulo;
        this.inicio = inicio;
        this.fim = fim;
        this.disciplinas = disciplinas;
    }
}