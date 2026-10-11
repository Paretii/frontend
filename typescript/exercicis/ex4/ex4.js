let text = document.getElementById("text");
let btnFormatear = document.getElementById("btnForamtear");
let resultado = document.getElementById("resultado");
btnFormatear.addEventListener("click", (e) => {
    let nombres = text.value.split(" ");
    resultado.textContent = "";
    for (let i = 0; i < nombres.length; i++) {
        let letra = nombres[i].charAt(0).toUpperCase();
        resultado.textContent += letra + nombres[i].slice(1).toLowerCase() + " ";
    }
});
export {};
//# sourceMappingURL=ex4.js.map