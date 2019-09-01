import { Artefato } from "./Artefato";

export class Exercicio extends Artefato {
    public quantidade: number;
    public acertos: number;

    constructor(
        uuid: string,
        uuid_assunto?: string,
        data?: string,
        descricao?: string,
        quantidade?: number,
        acertos?: number,
        tipoArtefato?: number);
    constructor(
        uuid: string,
        uuid_assunto: string,
        data: string,
        descricao: string,
        quantidade: number,
        acertos: number,
        tipoArtefato: number
    ) {
        super(uuid, uuid_assunto, data, descricao, tipoArtefato);

        this.quantidade = quantidade;
        this.acertos = acertos;
    }
}