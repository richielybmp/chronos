import { Artefato } from "./Artefato";

export class Material extends Artefato {
    public porcentagem: number
    public uuid: string = '';
    public descricao: string = '';

    constructor(descricao: string, porcentagem: number) {
        super()
        this.porcentagem = porcentagem
    }
}