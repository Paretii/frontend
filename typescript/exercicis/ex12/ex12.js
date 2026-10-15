let Pepe = {
    nom: "Pepe",
    edat: 20,
    curs: "DAW"
};
let Juan = {
    nom: "Juan",
    edat: 22,
    curs: "DAM"
};
function mostrarEstudiant(estudiant) {
    return "Nom: " + estudiant.nom + '<br>' + "Edat: " + estudiant.edat + "<br>" + "Curs: " + estudiant.curs;
}
let outputEstudiants = document.getElementById("outputEstudiants");
outputEstudiants.innerHTML = mostrarEstudiant(Pepe) + "<br>" + mostrarEstudiant(Juan);
function calcularDistancia(punt) {
    return Math.sqrt((punt.x2 - punt.x1) ** 2 + (punt.y2 - punt.y1) ** 2);
}
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", () => {
    let calcul = {
        x1: 0,
        y1: 0,
        x2: Number(document.getElementById("x").value),
        y2: Number(document.getElementById("y").value)
    };
    let outputCalcul = document.getElementById("outputCalcul");
    outputCalcul.textContent = "Desde 0,0 fins x: " + calcul.x2 + " y: " + calcul.y2 + " hi ha: " + calcularDistancia(calcul) + "m";
});
export {};
//# sourceMappingURL=ex12.js.map