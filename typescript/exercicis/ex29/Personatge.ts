import {nombreAleatori} from './utils.js'
export class Personatge{
    private readonly _nom:string
    private readonly _atac:number = nombreAleatori(1,10)
    private _puntsVida:number = nombreAleatori(1,50)
    constructor(nom:string){
        this._nom = nom
    }
    get nom(): string {
        return this._nom;
    }

    get atac(): number {
        return this._atac;
    }

    get puntsVida(): number {
        return this._puntsVida;
    }
    set puntsVida(value: number) {
        this._puntsVida = value;
    }
    public atacar(){
        return `${this._nom} ataca (atac: ${this._atac}).`;
    }
}