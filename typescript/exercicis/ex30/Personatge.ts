import {nombreAleatori} from './utils.js'
export abstract class Personatge{
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
        if(value < 0){
            this._puntsVida = 0
        }else{
            this._puntsVida = value;
        }
    }
    public abstract atacar():string
    public abstract esquivar():boolean

}