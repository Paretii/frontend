let selectColor = document.getElementById("color");
let cuadrado = document.getElementById("cuadrado");
var ColorFondo;
(function (ColorFondo) {
    ColorFondo["Rojo"] = "#e74c3c";
    ColorFondo["Azul"] = "#3498db";
    ColorFondo["Verde"] = "#2ecc71";
    ColorFondo["Amarillo"] = "#f1c40f";
})(ColorFondo || (ColorFondo = {}));
Object.entries(ColorFondo).forEach(([color, valor]) => {
    const option = document.createElement("option");
    option.value = valor;
    option.textContent = color;
    selectColor.appendChild(option);
});
cuadrado.style.height = "200px";
cuadrado.style.width = "200px";
cuadrado.style.border = "3px solid black";
cuadrado.style.backgroundColor = selectColor.value;
selectColor.addEventListener("change", (event) => {
    cuadrado.style.backgroundColor = selectColor.value;
});
export {};
//# sourceMappingURL=ex20.js.map