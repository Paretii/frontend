import {Personatge} from "./Personatge.js";

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
}
