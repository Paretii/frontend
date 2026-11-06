import {Personatge} from "./Personatge.js";
import * as utils from "./utils.js";

export class Guerrer extends Personatge{
    private readonly _arma:string
    constructor(nom:string, arma:string){
        super(nom)
        this._arma = arma
    }

    get arma(): string {
        return this._arma;
    }

    override atacar(): string {
        return `${this.nom} (Guerrer) ataca amb l'arma ${this._arma} (atac: ${this.atac}).`;
    }
    override esquivar():boolean{
        let num = utils.nombreAleatori(1,100)
        return num <= 20;
    }
}
