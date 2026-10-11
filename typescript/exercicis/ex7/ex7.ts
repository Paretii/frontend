let divImg = document.getElementById("img") as HTMLImageElement
let ampliada = document.getElementById("ampliada") as HTMLImageElement

divImg.addEventListener("click", (e)=>{
    let nueva = e.target as HTMLImageElement
    ampliada.src = nueva.src
})