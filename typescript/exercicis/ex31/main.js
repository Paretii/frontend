import { Jugador } from "./Jugador.js";
import * as utils from "./utils.js";
const inputNom = utils.obtenirElement("nom");
const inputNumeros = utils.obtenirElement("numeros");
const btnCrear = utils.obtenirElement("btnCrear");
const btnIniciar = utils.obtenirElement("btnIniciar");
const jugadorP = utils.obtenirElement("jugadors");
let jugadors = [];
btnCrear.addEventListener("click", () => {
    let split = inputNumeros.value.split(",");
    let jugador = new Jugador(inputNom.value, split);
    jugadors.push(jugador);
    jugadorP.innerHTML += jugador.nom + ": ";
    for (let num of split) {
        jugadorP.innerHTML += String(num).padStart(2, "0");
    }
});
btnIniciar.addEventListener("click", () => {
    let numeros = [];
    for (let i = 0; i < 51; i++) {
        numeros.push(i);
    }
    let premi1 = numeros.splice(utils.nombreAleatori(0, numeros.length - 1), 1);
    let premi2 = numeros.splice(utils.nombreAleatori(0, numeros.length - 1), 1);
    let premi3 = numeros.splice(utils.nombreAleatori(0, numeros.length - 1), 1);
    jugadorP.innerHTML = premi1 + " " + premi2 + " " + premi3;
});
//# sourceMappingURL=main.js.map