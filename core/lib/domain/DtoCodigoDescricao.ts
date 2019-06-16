export class DtoCodigoDescricao {
    private _codigo: string = '';

    private _descricao: string = '';

    constructor(codigo: string, descricao: string) {
        this._codigo = codigo;
        this._descricao = descricao;
    }

    public get codigo(): string {
        return this._codigo;
    }

    public set codigo(value: string) {
        this._codigo = value;
    }

    public get descricao(): string {
        return this._descricao;
    }

    public set descricao(value: string) {
        this._descricao = value;
    }
}