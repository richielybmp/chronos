export class DtoCodigoDescricao {
    public uuid: string = '';
    public descricao: string = '';

    constructor(uuid: string, descricao: string) {
        this.uuid = uuid;
        this.descricao = descricao;
    }
}