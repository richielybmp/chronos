export class DtoCodigoDescricao {
    private _codigo: string = '';

    private _descricao: String = '';

    constructor(codigo: string, descricao: String) {
        this._codigo = codigo;
        this._descricao = descricao;
    }

    public get codigo(): string {
        return this._codigo;
    }

    public set codigo(value: string) {
        this._codigo = value;
    }

    public get descricao(): String {
        return this._descricao;
    }

    public set descricao(value: String) {
        this._descricao = value;
    }
}