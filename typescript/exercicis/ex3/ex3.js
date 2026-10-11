let textarea = document.getElementById("textarea");
let resultado = document.getElementById("resultado");
let btnCaracters = document.getElementById("btnCaracters");
btnCaracters.addEventListener("click", (e) => {
    resultado.innerHTML = "Espais: " + contarCaracter(textarea.value, " ") +
        "<br> Punts: " + contarCaracter(textarea.value, ".") +
        "<br> Comes: " + contarCaracter(textarea.value, ",");
});
function contarCaracter(cadena, caracter) {
    return cadena.split(caracter).length - 1;
}
export {};
//# sourceMappingURL=ex3.js.map