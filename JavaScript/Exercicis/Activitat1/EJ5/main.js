//Afegeix en aquest fitxer Js tot el codi necessari per a l'exercici

// EJ5
let formulario = document.getElementById("formulario")
let textContador = document.getElementById("textContador")
let btnContador = document.getElementById("btnContador")

let valorGuardado = localStorage.getItem("contadorGlobal")

if (valorGuardado === null) {
    mostrarFormulari()
} else {
    mostrarContador(parseInt(valorGuardado, 10))
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    let valor = parseInt(document.getElementById("numero").value, 10)

    if (Number.isNaN(valor) || valor <= 0) {
        alert("Introdueix un número vàlid (major que 0)")
        return
    }

    localStorage.setItem("contadorGlobal", String(valor))
    mostrarContador(valor)
})

function mostrarFormulari() {
    formulario.style.display = ""
    textContador.classList.add("textContador")
    btnContador.classList.add("btnContador")
}

function mostrarContador(valorInicial) {
    formulario.style.display = "none"
    textContador.classList.remove("textContador")
    btnContador.classList.remove("btnContador")

    let contadorGlobal = valorInicial
    textContador.textContent = "El contador es: " + contadorGlobal

    btnContador.addEventListener("click", () => {
        contadorGlobal--

        if (contadorGlobal <= 0) {
            textContador.textContent = "Zero reached!"
            localStorage.removeItem("contadorGlobal")
        } else {
            textContador.textContent = "El contador es: " + contadorGlobal
            localStorage.setItem("contadorGlobal", String(contadorGlobal))
        }
    })
}