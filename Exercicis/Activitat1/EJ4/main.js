//Afegeix en aquest fitxer Js tot el codi necessari per a l'exercici

//EJ4

let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (event) =>{
    event.preventDefault()
    formulario.style.display = "none"

    let contador = document.getElementById("numero").value

    let textContador = document.getElementById("textContador")
    textContador.classList.remove("textContador")
    textContador.textContent = "Segons restants: " + contador
    const intervalId = setInterval(() => {
        if (contador === 0) {
            clearInterval(intervalId);
            textContador.textContent = "Zero reached!"
        }else{
            contador--;
            textContador.textContent = "Segons restants " + contador
        }
    }, 1000);
})






