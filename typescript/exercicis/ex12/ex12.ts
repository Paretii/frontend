type Estudiant = {
    nom: string;
    edat: number;
    curs: string;
}
let Pepe: Estudiant = {
    nom: "Pepe",
    edat: 20,
    curs: "DAW"
}
let Juan: Estudiant = {
    nom: "Juan",
    edat: 22,
    curs: "DAM"
}
type Punt={
    x1: 0;
    y1: 0;
    x2: number;
    y2: number;
}
function mostrarEstudiant(estudiant: Estudiant): string {
    return "Nom: " + estudiant.nom + '<br>'+  "Edat: " + estudiant.edat + "<br>"+ "Curs: " + estudiant.curs;
}
let outputEstudiants = document.getElementById("outputEstudiants") as HTMLOutputElement;
outputEstudiants.innerHTML = mostrarEstudiant(Pepe) + "<br>" + mostrarEstudiant(Juan);
function calcularDistancia(punt: Punt): number {
    return Math.sqrt((punt.x2 - punt.x1) ** 2 + (punt.y2 - punt.y1) ** 2);
}
let btnCalcular = document.getElementById("btnCalcular") as HTMLButtonElement;
btnCalcular.addEventListener("click", () => {
    let calcul : Punt = {
        x1: 0,
        y1: 0,
        x2: Number((document.getElementById("x") as HTMLInputElement).value),
        y2: Number((document.getElementById("y") as HTMLInputElement).value)
    }
  
    let outputCalcul = document.getElementById("outputCalcul") as HTMLOutputElement;
    outputCalcul.textContent = "Desde 0,0 fins x: " + calcul.x2+ " y: " + calcul.y2 +" hi ha: " +calcularDistancia(calcul) +"m";
})