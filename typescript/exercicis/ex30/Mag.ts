import {Personatge} from "./Personatge.js";
import * as utils from "./utils.js";

export class Mag extends Personatge{
    private readonly _poderMagic :string
    constructor(nom:string, poderMagic:string){
        super(nom)
        this._poderMagic  = poderMagic
    }

    get poderMagic(): string {
        return this._poderMagic;
    }

    override atacar(): string {
        return  this.nom + " es un mag amb " + this._poderMagic + " i te " + this.atac + " de atac"
    }
    override esquivar():boolean{
        let num = utils.nombreAleatori(1,100)
        return num <= 35;
    }
}
