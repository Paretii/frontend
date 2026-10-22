let tipus = document.getElementById("tipus");
let nom = document.getElementById("nom");
let puntos = document.getElementById("puntos");
let armaConjuro = document.getElementById("armaConjuro");
let damageTradicion = document.getElementById("damageTradicion");
let resultado = document.getElementById("resultado");
let btnGuardar = document.getElementById("btnGuardar");
let btnMostrar = document.getElementById("btnMostrar");
let personatges = [];
btnGuardar.addEventListener("click", () => {
    if (tipus.value == "Barbarian") {
        let b = {
            nombre: nom.value,
            puntos: puntos.valueAsNumber,
            tipo: "Barbarian",
            arma: armaConjuro.value,
            damage: damageTradicion.value,
        };
        personatges.push(b);
    }
    else {
        let w = {
            nombre: nom.value,
            puntos: puntos.valueAsNumber,
            tipo: "Wizad",
            conjuro: armaConjuro.value,
            tradicion: damageTradicion.value,
        };
        personatges.push(w);
    }
});
btnMostrar.addEventListener("click", () => {
    for (const p of personatges) {
        if ("arma" in p) {
            resultado.innerHTML += `Type: ${p.tipo}, Name: ${p.nombre}, Points: ${p.puntos}, Weapon: ${p.arma}, Damage: ${p.damage}<br>`;
        }
        else {
            resultado.innerHTML += `Type: ${p.tipo}, Name: ${p.nombre}, Points: ${p.puntos}, Conjuration: ${p.conjuro}, Arcane Tradition: ${p.tradicion}<br>`;
        }
    }
});
export {};
//# sourceMappingURL=ex21.js.map