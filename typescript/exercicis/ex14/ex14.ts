type Color = {
    rojo: number;
    verde: number;
    azul: number;
}
let mostrarColor = document.getElementById("mostraColor") as HTMLDivElement
let btnActualizar = document.getElementById("btnActualizar") as HTMLButtonElement

btnActualizar.addEventListener("click", () => {
    let color:Color = {
        rojo: (document.getElementById("rojo") as HTMLInputElement).valueAsNumber,
        verde:(document.getElementById("verde") as HTMLInputElement).valueAsNumber,
        azul:(document.getElementById("azul") as HTMLInputElement).valueAsNumber,
    }
    mostrarColor.style.backgroundColor = `rgb(${color.rojo}, ${color.verde}, ${color.azul})`;
    mostrarColor.textContent = `rgb(${color.rojo}, ${color.verde}, ${color.azul})`
})