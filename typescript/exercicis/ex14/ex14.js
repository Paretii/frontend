let mostrarColor = document.getElementById("mostraColor");
let btnActualizar = document.getElementById("btnActualizar");
btnActualizar.addEventListener("click", () => {
    let color = {
        rojo: document.getElementById("rojo").valueAsNumber,
        verde: document.getElementById("verde").valueAsNumber,
        azul: document.getElementById("azul").valueAsNumber,
    };
    mostrarColor.style.backgroundColor = `rgb(${color.rojo}, ${color.verde}, ${color.azul})`;
    mostrarColor.textContent = `rgb(${color.rojo}, ${color.verde}, ${color.azul})`;
});
export {};
//# sourceMappingURL=ex14.js.map