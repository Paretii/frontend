let text = document.getElementById("text") as HTMLInputElement
let btnFormatear = document.getElementById("btnForamtear") as HTMLButtonElement
let resultado = document.getElementById("resultado") as HTMLParagraphElement

btnFormatear.addEventListener("click", (e) =>{
    let nombres: string[] = text.value.split(" ")
    resultado.textContent = ""
    for(let i = 0 ; i < nombres.length ; i++){
        let letra = nombres[i].charAt(0).toUpperCase()
        resultado.textContent += letra + nombres[i].slice(1).toLowerCase() + " "
    }
})