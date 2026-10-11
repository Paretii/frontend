let colores = document.getElementById("colores") as HTMLOptionElement
let rectangulo = document.getElementById("rectangulo") as HTMLDivElement
let btnAplicar = document.getElementById("btnAplicar") as HTMLButtonElement
let resultado = document.getElementById("resultado") as HTMLParagraphElement

rectangulo.style.backgroundColor = colores.value
resultado.textContent = "Color aplicado: " + colores.value

btnAplicar.addEventListener("click", (e) =>{
    rectangulo.style.backgroundColor = colores.value
    resultado.textContent = "Color aplicado: " + colores.value
})
