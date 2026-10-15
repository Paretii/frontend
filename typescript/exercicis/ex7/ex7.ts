let divImg = document.getElementById("img") as HTMLDivElement
let ampliada = document.getElementById("ampliada") as HTMLImageElement

divImg.addEventListener("click", (e)=>{
    ampliada.src = (e.target as HTMLImageElement).src
})