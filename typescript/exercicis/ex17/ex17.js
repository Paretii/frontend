let btnRegistrar = document.getElementById("registrar");
let btnEntrada = document.getElementById("entrada");
let btnInventari = document.getElementById("inventari");
let resultado = document.getElementById("resultat");
let inventari = new Map();
btnRegistrar.addEventListener("click", (event) => {
    let nombre = document.getElementById("producte").value;
    inventari.set(nombre, 0);
    resultado.innerText = "Producte: " + nombre + " actualitzat amb 0 unitats en estoc.";
});
btnEntrada.addEventListener("click", (event) => {
    let nombre = document.getElementById("producte").value;
    if (inventari.get(nombre) != null) {
        inventari.set(nombre, inventari.get(nombre) + 1);
        resultado.innerText = "Producte: " + nombre + " actualitzat. Estoc actual: " + inventari.get(nombre) + " unitats de producte.";
    }
    else {
        resultado.innerText = "Producte: " + nombre + " no registrat ";
    }
});
btnInventari.addEventListener("click", (event) => {
    console.log(inventari.keys());
    resultado.innerHTML = "";
    for (const [nombre, cantidad] of inventari) {
        resultado.innerHTML += `${nombre}: ${cantidad} unitats <br>`;
    }
});
export {};
//# sourceMappingURL=ex17.js.map