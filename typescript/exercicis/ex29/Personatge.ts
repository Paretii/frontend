export class Personatge{
    Nom:string
    Atac:number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    PuntaVida:number = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    constructor(nom:string){
        this.Nom = nom
    }
    atacar(){
        return "atac basic"
    }
}