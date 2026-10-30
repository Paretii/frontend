import {Personatge} from "./Personatge.js";

export class Guerrer extends Personatge{
    arma:string
    constructor(nom:string, arma:string){
        super(nom)
        this.arma = arma
    }
    atacar(): string {
        return "hola";
    }
}
