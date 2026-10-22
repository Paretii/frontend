let tipus = document.getElementById("tipus") as HTMLSelectElement
let nom = document.getElementById("nom") as HTMLInputElement
let puntos = document.getElementById("puntos") as HTMLInputElement
let armaConjuro = document.getElementById("armaConjuro") as HTMLInputElement
let damageTradicion = document.getElementById("damageTradicion") as HTMLInputElement
let resultado = document.getElementById("resultado") as HTMLParagraphElement

let btnGuardar = document.getElementById("btnGuardar") as HTMLButtonElement
let btnMostrar = document.getElementById("btnMostrar") as HTMLButtonElement

type TipusPersonatge = "Wizad"|"Barbarian"
interface BasePersonage{
    nombre:string,
    puntos:number,
}

interface Barbarian extends BasePersonage{
    tipo:TipusPersonatge,
    arma:string,
    damage:string
}
interface Wizard extends BasePersonage{
    tipo:TipusPersonatge,
    conjuro:string,
    tradicion:string,
}
type Personatges = Barbarian|Wizard

let personatges:Personatges[] = []

btnGuardar.addEventListener("click", () => {
    if(tipus.value == "Barbarian"){
        let b:Barbarian ={
            nombre:nom.value,
            puntos:puntos.valueAsNumber,
            tipo:"Barbarian",
            arma: armaConjuro.value,
            damage:damageTradicion.value,
        }
        personatges.push(b)
    }else{
        let w:Wizard ={
            nombre:nom.value,
            puntos:puntos.valueAsNumber,
            tipo:"Wizad",
            conjuro:armaConjuro.value,
            tradicion:damageTradicion.value,
        }
        personatges.push(w)
    }
})

btnMostrar.addEventListener("click", () => {
    for (const p of personatges) {
        if("arma" in p){
            resultado.innerHTML += `Type: ${p.tipo}, Name: ${p.nombre}, Points: ${p.puntos}, Weapon: ${p.arma}, Damage: ${p.damage}<br>`
        }else{
            resultado.innerHTML += `Type: ${p.tipo}, Name: ${p.nombre}, Points: ${p.puntos}, Conjuration: ${p.conjuro}, Arcane Tradition: ${p.tradicion}<br>`
        }
    }
})