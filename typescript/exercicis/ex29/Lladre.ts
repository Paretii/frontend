import {Personatge} from "./Personatge.js";

export class Lladre extends Personatge{
    private readonly _boti :number
    constructor(nom:string, boti:number){
        super(nom)
        this._boti  = boti
    }
    get boti(): number {
        return this._boti;
    }
    override atacar(): string {
        return  this.nom + " es un lladre amb " + this._boti + " i te " + this.atac + " de atac"
    }
}