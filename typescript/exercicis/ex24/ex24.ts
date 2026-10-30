import {Item} from './Item.js'
import {Inventari} from "./Inventari.js";

let inputCapacitat = document.getElementById("capacitat") as HTMLInputElement
let inputNom = document.getElementById("nom") as HTMLInputElement
let inputDesc = document.getElementById("descripcio") as HTMLInputElement
let inputPes = document.getElementById("pes") as HTMLInputElement

let btnCapacitat = document.getElementById("btnCapacitat") as HTMLButtonElement
let btnAfegir = document.getElementById("btnAfegir") as HTMLButtonElement
let btnMostrar = document.getElementById("btnMostrar") as HTMLButtonElement

let resultat = document.getElementById("resultat") as HTMLParagraphElement

let inventari:Inventari

btnAfegir.setAttribute("disabled","")
btnMostrar.setAttribute("disabled","")
btnCapacitat.addEventListener("click", (e) =>{
    btnCapacitat.setAttribute("disabled","")
    btnAfegir.removeAttribute("disabled")
    btnMostrar.removeAttribute("disabled")
    inventari  = new Inventari(inputCapacitat.valueAsNumber,[])
})

btnAfegir.addEventListener("click", (e) =>{
    let item = new Item(inputNom.value,inputDesc.value,inputPes.valueAsNumber)
    resultat.innerHTML = inventari.afegirItem(item)


})

btnMostrar.addEventListener("click", (e) =>{
    resultat.innerHTML  = inventari.toString()
})



