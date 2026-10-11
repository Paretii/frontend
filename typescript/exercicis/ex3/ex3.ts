let textarea = document.getElementById("textarea") as HTMLTextAreaElement
let resultado = document.getElementById("resultado") as HTMLParagraphElement

let btnCaracters = document.getElementById("btnCaracters") as HTMLButtonElement

btnCaracters.addEventListener("click", (e) => {
    resultado.innerHTML = "Espais: " + contarCaracter(textarea.value, " ") +
        "<br> Punts: " + contarCaracter(textarea.value, ".") +
        "<br> Comes: " + contarCaracter(textarea.value, ",")

    }
)
function contarCaracter(cadena: string, caracter: string): number {
    return cadena.split(caracter).length - 1;
}