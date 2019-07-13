import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Disciplina } from "./Disciplina";

export class Cronograma extends DtoCodigoDescricao {
    public dataInicio: string;
    public dataFim: string;
    public titulo: string;
    public disciplinas: Disciplina[] = [];

    constructor(
        codigo: string,
        titulo: string,
        descricao: string,
        dataInicio: string,
        dataFim: string,
        disciplinas: Disciplina[]) {
        super(codigo, descricao)
        this.titulo = titulo
        this.dataInicio = dataInicio
        this.dataFim = dataFim
        this.disciplinas = disciplinas
    }

    // public get dataInicio(): string {
    //     return this._dataInicio;
    // }

    // public set dataInicio(value: string) {
    //     this._dataInicio = value;
    // }

    // public get dataFim(): string {
    //     return this._dataFim;
    // }

    // public set dataFim(value: string) {
    //     this._dataFim = value;
    // }

    // public get disciplinas(): Disciplina[] {
    //     return this._disciplinas;
    // }

    // public set disciplinas(value: Disciplina[]) {
    //     this._disciplinas = value;
    // }
}