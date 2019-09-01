export class Artefato {
    public uuid: string = "";
    public data: string = "";
    public uuid_assunto: string = "";
    public tipoArtefato: number;
    public descricao: string;

    constructor(uuid: string, uuid_assunto: string, data: string, descricao: string, tipo: number) {
        this.uuid = uuid;
        this.uuid_assunto = uuid_assunto;
        this.data = data;
        this.tipoArtefato = tipo;
        this.descricao = descricao;
    }

}