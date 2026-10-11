let rectangulo = document.getElementById("rectangulo");
let resultado = document.getElementById("resultado");
let btnAlternar = document.getElementById("btnAlternar");
btnAlternar.addEventListener("click", () => {
    rectangulo.classList.toggle("actiu");
    if (rectangulo.classList.contains("actiu")) {
        resultado.textContent = "Estat: Activada";
    }
    else {
        resultado.textContent = "Estat: Desactivat";
    }
});
export {};
//# sourceMappingURL=ex9.js.map