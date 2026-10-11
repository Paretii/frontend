let colores = document.getElementById("colores");
let rectangulo = document.getElementById("rectangulo");
let btnAplicar = document.getElementById("btnAplicar");
let resultado = document.getElementById("resultado");
rectangulo.style.backgroundColor = colores.value;
resultado.textContent = "Color aplicado: " + colores.value;
btnAplicar.addEventListener("click", (e) => {
    rectangulo.style.backgroundColor = colores.value;
    resultado.textContent = "Color aplicado: " + colores.value;
});
export {};
//# sourceMappingURL=ex6.js.map