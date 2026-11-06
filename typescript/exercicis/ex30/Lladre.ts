import {Personatge} from "./Personatge.js";
import * as utils from "./utils.js"
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
    override esquivar():boolean{
        let num = utils.nombreAleatori(1,100)
        return num <= 50;
    }
}