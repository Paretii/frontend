let rectangulo = document.getElementById("rectangulo") as HTMLDivElement;
let resultado = document.getElementById("resultado") as HTMLParagraphElement;
let btnAlternar = document.getElementById("btnAlternar") as HTMLButtonElement;

btnAlternar.addEventListener("click", () => {
    rectangulo.classList.toggle("actiu");
    if (rectangulo.classList.contains("actiu")) {
        resultado.textContent = "Estat: Activada";
    }else{
        resultado.textContent = "Estat: Desactivat";
    }
    
})