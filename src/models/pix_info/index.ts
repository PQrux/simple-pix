import lengther from "../../utils/lengther";

export default class PIXInfo{

    id: string;
    private _data!: string;
    maxLength?: number;

    public get data(){
        return this._data;
    } 

    public set data(data: string){
        this._data = data.length >= this.maxLength! ? data.substring(0, this.maxLength) : data;
    }

    constructor(id: string, data: string, maxLength?: number){
        this.id = id;
        this.maxLength = maxLength;
        this.data = data;
    }

    toString(){
        return `${this.id}${lengther(this.data)}${this.data}`;
    }
}