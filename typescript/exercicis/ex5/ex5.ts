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
    let longitud = text.length
    let textMayus = text.toUpperCase()
    console.log(textMayus)
    if(longitud > 10){
        return [longitud, textMayus ,true]
    }else{
        return [longitud, textMayus ,false]
    }
}