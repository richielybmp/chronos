export class Artefato {
    private _id: string = '';
    private _data: Date = new Date();

    constructor() {
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get data(): Date {
        return this._data;
    }
    public set data(value: Date) {
        this._data = value;
    }
}