import { DtoCodigoDescricao } from "./DtoCodigoDescricao";
import { Assunto } from "./Assunto";

export class Disciplina extends DtoCodigoDescricao {
    public assuntos: Assunto[]

    constructor(codigo: string, descricao: string, assuntos: Assunto[]) {
        super(codigo, descricao)
        this.assuntos = assuntos
    }

    // public get assuntos(): Assunto[] {
    //     return this._assuntos;
    // }

    // public set assuntos(v: Assunto[]) {
    //     this._assuntos = v;
    // }
}