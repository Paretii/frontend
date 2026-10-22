let dicionario = {};
let btnGuardar = document.getElementById("btnGuardar");
let btnMostrar = document.getElementById("btnMostrar");
let renec = document.getElementById("renec");
let definicion = document.getElementById("definicio");
let resultado = document.getElementById("resultado");
btnGuardar.addEventListener("click", () => {
    dicionario[renec.value] = definicion.value;
});
btnMostrar.addEventListener("click", () => {
    for (let d in dicionario) {
        resultado.innerHTML += d + ": " + dicionario[d] + "<br>";
    }
});
export {};
//# sourceMappingURL=ex16.js.map