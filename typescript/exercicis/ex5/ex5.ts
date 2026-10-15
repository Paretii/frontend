let texto = document.getElementById("text") as HTMLInputElement
let btnAnalizar = document.getElementById("btnAnalizar") as HTMLButtonElement
let resultado = document.getElementById("resultado") as HTMLParagraphElement

btnAnalizar.addEventListener("click", (e) =>{
    let [longitud,textMayus,mes] = tupla(texto.value)
    if(mes){
        resultado.innerHTML = "<b>Caràcters: </b> " + longitud + "<br> <b>Majúscules: </b>" + textMayus + "<br> <b>Més de 10 caràcters?: </b> Sí"
    }else{
        resultado.innerHTML = "<b>Caràcters: </b> " + longitud + "<br> <b>Majúscules: </b>" + textMayus + "<br> <b>Més de 10 caràcters?: </b> No"
    }
})
function tupla(text:string):[number, string, boolean]{
    return [text.length, text.toUpperCase() ,text.length > 10]
}