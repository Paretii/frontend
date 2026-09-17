//Afegeix en aquest fitxer Js tot el codi necessari per a l'exercici

//EJ4

let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (event) =>{
    event.preventDefault()
    formulario.style.display = "none"

    let contador = document.getElementById("numero").value

    let textContador = document.getElementById("textContador")
    textContador.classList.remove("textContador")

    let btnContador = document.getElementById("btnContador")
    btnContador.classList.remove("btnContador")

    textContador.textContent = contador

    btnContador.addEventListener("click", () =>{
        contador--
        if(contador === 0){
            textContador.textContent = "Has arribat  a 0!"
            btnContador.classList.add("btnContador")
        }else{
            textContador.textContent = contador
        }
    })
})






