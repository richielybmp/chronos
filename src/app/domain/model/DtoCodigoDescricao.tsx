export class DtoCodigoDescricao {
    private _codigo: number = 0
    private _descricao: String = ''

    constructor(codigo: number, descricao: String) {
        this._codigo = codigo;
        this._descricao = descricao;
    }
}