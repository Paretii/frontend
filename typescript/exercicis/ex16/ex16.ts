type Dicionario = Record<string, string>;

let dicionario:Dicionario = {};

let btnGuardar = document.getElementById("btnGuardar") as HTMLButtonElement;
let btnMostrar = document.getElementById("btnMostrar") as HTMLButtonElement;
let renec = document.getElementById("renec") as HTMLInputElement;
let definicion = document.getElementById("definicio") as HTMLInputElement;
let resultado = document.getElementById("resultado") as HTMLParagraphElement;
btnGuardar.addEventListener("click", () => {
    dicionario[renec.value]= definicion.value;

})

btnMostrar.addEventListener("click", () => {
    for(let d in dicionario){
        resultado.innerHTML += d + ": " + dicionario[d] + "<br>";
    }
})