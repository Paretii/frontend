let btnRegistrar = document.getElementById("registrar") as HTMLButtonElement;
let btnEntrada = document.getElementById("entrada") as HTMLButtonElement;
let btnInventari = document.getElementById("inventari") as HTMLButtonElement;
let resultado = document.getElementById("resultat") as HTMLParagraphElement;

let inventari: Map<string,number> = new Map();

btnRegistrar.addEventListener("click", (event) => {
    let nombre: string  = (document.getElementById("producte") as HTMLInputElement).value
    inventari.set(nombre,0);
    resultado.innerText = "Producte: " + nombre + " actualitzat amb 0 unitats en estoc."
})
btnEntrada.addEventListener("click", (event) => {
    let nombre: string  = (document.getElementById("producte") as HTMLInputElement).value
    inventari.set(nombre,(inventari.get(nombre) as number)+1);
    resultado.innerText = "Producte: " + nombre + " actualitzat. Estoc actual: " + inventari.get(nombre) + " unitats de producte.";
})
btnInventari.addEventListener("click", (event) => {
    console.log(inventari.keys())
    resultado.innerHTML =""
    for (const [nombre,cantidad] of inventari) {
        resultado.innerHTML += `${nombre}: ${cantidad} unitats <br>`
    }
})