import { Item } from './Item.js';
import { Inventari } from "./Inventari.js";
let inputCapacitat = document.getElementById("capacitat");
let inputNom = document.getElementById("nom");
let inputDesc = document.getElementById("descripcio");
let inputPes = document.getElementById("pes");
let btnCapacitat = document.getElementById("btnCapacitat");
let btnAfegir = document.getElementById("btnAfegir");
let btnMostrar = document.getElementById("btnMostrar");
let resultat = document.getElementById("resultat");
let inventari;
btnAfegir.setAttribute("disabled", "");
btnMostrar.setAttribute("disabled", "");
btnCapacitat.addEventListener("click", (e) => {
    btnCapacitat.setAttribute("disabled", "");
    btnAfegir.removeAttribute("disabled");
    btnMostrar.removeAttribute("disabled");
    inventari = new Inventari(inputCapacitat.valueAsNumber, []);
});
btnAfegir.addEventListener("click", (e) => {
    let item = new Item(inputNom.value, inputDesc.value, inputPes.valueAsNumber);
    resultat.innerHTML = inventari.afegirItem(item);
});
btnMostrar.addEventListener("click", (e) => {
    resultat.innerHTML = inventari.toString();
});
//# sourceMappingURL=ex24.js.map