let texto = document.getElementById("text");
let btnAnalizar = document.getElementById("btnAnalizar");
let resultado = document.getElementById("resultado");
btnAnalizar.addEventListener("click", (e) => {
    let [longitud, textMayus, mes] = tupla(texto.value);
    if (mes) {
        resultado.innerHTML = "<b>Caràcters: </b> " + longitud + "<br> <b>Majúscules: </b>" + textMayus + "<br> <b>Més de 10 caràcters?: </b> Sí";
    }
    else {
        resultado.innerHTML = "<b>Caràcters: </b> " + longitud + "<br> <b>Majúscules: </b>" + textMayus + "<br> <b>Més de 10 caràcters?: </b> No";
    }
});
function tupla(text) {
    return [text.length, text.toUpperCase(), text.length > 10];
}
export {};
//# sourceMappingURL=ex5.js.map