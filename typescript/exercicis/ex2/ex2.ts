const inputGrados  = document.getElementById("inputGrados") as HTMLInputElement;
const selectGrados = document.getElementById("tipoGrados") as HTMLSelectElement;
const btnCalcular = document.getElementById("btnCalcular") as HTMLButtonElement;


btnCalcular.addEventListener("click", (e: Event) => {
    let resultado = document.getElementById("resultado") as HTMLParagraphElement;
    if (selectGrados.value === "Celsius") {
        let calculo = (parseInt(inputGrados.value)*9/5)+32;
        resultado.textContent = inputGrados.value + "°C equivalen  a " + calculo.toFixed(2) + "°F (Celsius a Fahrenheit)";
    }else if (selectGrados.value === "Fahrenheit") {
        let calculo = (parseInt(inputGrados.value)-32)*(5/9);
        resultado.textContent = inputGrados.value + "°F equivalen  a " + calculo.toFixed(2) + "°C (Fahrenheit a Celsius)";
    }
})