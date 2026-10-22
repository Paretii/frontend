let selectColor = document.getElementById("color") as HTMLSelectElement;
let cuadrado = document.getElementById("cuadrado") as HTMLDivElement;
enum ColorFondo{
    Rojo = "#e74c3c",
    Azul = "#3498db",
    Verde = "#2ecc71",
    Amarillo = "#f1c40f",
}
Object.entries(ColorFondo).forEach(([color,valor]) => {
    const option = document.createElement("option");
    option.value = valor;
    option.textContent = color;
    selectColor.appendChild(option);
})
cuadrado.style.height = "200px"
cuadrado.style.width = "200px"
cuadrado.style.border = "3px solid black";
cuadrado.style.backgroundColor = selectColor.value;
selectColor.addEventListener("change", (event) => {
    cuadrado.style.backgroundColor = selectColor.value;
})

