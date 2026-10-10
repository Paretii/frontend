const inputNum = document.getElementById("inputNumero");
const btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", (e) => {
    let numRandom = randomInt(1, 100);
    let num = parseInt(inputNum.value);
    console.log(num);
    console.log(numRandom);
    let resultado = document.getElementById("resultado");
    if (numRandom >= num && num > 0) {
        resultado.textContent = "El numero: " + num + " esta dintre de l'interval " + numRandom;
    }
    else {
        resultado.textContent = "El numero: " + num + " no esta dintre de l'interval " + numRandom;
    }
});
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export {};
//# sourceMappingURL=ex1.js.map