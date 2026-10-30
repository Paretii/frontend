import {Personatge} from "./Personatge.js";

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

}
