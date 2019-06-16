import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Disciplina } from "./Disciplina";

export class Cronograma extends DtoCodigoDescricao {
    private _dataInicio: Date;
    private _dataFim: Date;
    private _disciplinas: Disciplina[] = [];

    constructor(
        codigo: string,
        descricao: string,
        dataInicio: Date,
        dataFim: Date,
        disciplinas: Disciplina[]) {
        super(codigo, descricao)
        this._dataInicio = dataInicio
        this._dataFim = dataFim
        this._disciplinas = disciplinas
    }

    public get dataInicio(): Date {
        return this._dataInicio;
    }

    public set dataInicio(value: Date) {
        this._dataInicio = value;
    }

    public get dataFim(): Date {
        return this._dataFim;
    }

    public set dataFim(value: Date) {
        this._dataFim = value;
    }

    public get disciplinas(): Disciplina[] {
        return this._disciplinas;
    }

    public set disciplinas(value: Disciplina[]) {
        this._disciplinas = value;
    }
}