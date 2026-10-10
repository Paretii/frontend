const inputGrados = document.getElementById("inputGrados");
const selectGrados = document.getElementById("tipoGrados");
const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", (e) => {
    let resultado = document.getElementById("resultado");
    if (selectGrados.value === "Celsius") {
        let calculo = (parseInt(inputGrados.value) * 9 / 5) + 32;
        resultado.textContent = inputGrados.value + "°C equivalen  a " + calculo.toFixed(2) + "°F (Celsius a Fahrenheit)";
    }
    else if (selectGrados.value === "Fahrenheit") {
        let calculo = (parseInt(inputGrados.value) - 32) * (5 / 9);
        resultado.textContent = inputGrados.value + "°F equivalen  a " + calculo.toFixed(2) + "°C (Fahrenheit a Celsius)";
    }
});
export {};
//# sourceMappingURL=ex2.js.map