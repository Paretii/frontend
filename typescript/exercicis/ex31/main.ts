import {Jugador} from "./Jugador.js"
import * as utils from "./utils.js"


const inputNom = utils.obtenirElement<HTMLInputElement>("nom");
const inputNumeros = utils.obtenirElement<HTMLInputElement>("numeros")


const btnCrear = utils.obtenirElement<HTMLButtonElement>("btnCrear");
const btnIniciar = utils.obtenirElement<HTMLButtonElement>("btnIniciar");

const jugadorP =utils.obtenirElement<HTMLParagraphElement>("jugadors")


let jugadors:Jugador[] = []


btnCrear.addEventListener("click",()=>{
    let split:string[] = inputNumeros.value.split(",")
    let jugador = new Jugador(inputNom.value,split)
    jugadors.push(jugador)
    jugadorP.innerHTML += jugador.nom + ": "
    for(let num of split){
        jugadorP.innerHTML += String(num).padStart(2,"0")
    }
})

btnIniciar.addEventListener("click",()=>{
    let numeros:number[] = []
    for(let i:number = 0; i < 51; i++){
        numeros.push(i)
    }

    let premi1 = numeros.splice(utils.nombreAleatori(0, numeros.length - 1), 1);
    let premi2 = numeros.splice(utils.nombreAleatori(0, numeros.length - 1), 1);
    let premi3 = numeros.splice(utils.nombreAleatori(0, numeros.length - 1), 1);

    jugadorP.innerHTML = premi1 + " " + premi2 + " " + premi3

})

