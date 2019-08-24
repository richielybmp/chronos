export class Artefato {
    public uuid: string = "";
    public data: string = "";
    public uuid_assunto: string = "";
    public tipoArtefato: number;

    constructor(tipo: number) {
        this.tipoArtefato = tipo;
    }

}