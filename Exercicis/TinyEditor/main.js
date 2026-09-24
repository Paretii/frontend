console.log('Hi, Editor!');

let container = document.getElementById("container")

let textarea = document.getElementById("content")

let countText =document.getElementById("count")

let inputBuscar = document.getElementById("fromtxt")

let inputRemplazar = document.getElementById("totxt")

let palabraBuscar = document.getElementById("fromtxt").value

let plabraRemplazar = document.getElementById("totxt").value

let btnReplaceAll = document.getElementById("replace")

let btnClear = document.getElementById("clear")

function actualizarContador() {
    countText.textContent = textarea.value.length
    btnClear.disabled = textarea.value.length <= 0
}

function actualizarEstadoReplace() {
    palabraBuscar = document.getElementById("fromtxt").value.trim()
    plabraRemplazar = document.getElementById("totxt").value.trim()
    btnReplaceAll.disabled = (palabraBuscar === "" || plabraRemplazar === "")
}

actualizarContador()
actualizarEstadoReplace()

textarea.addEventListener("input", actualizarContador)
inputBuscar.addEventListener("input", actualizarEstadoReplace)
inputRemplazar.addEventListener("input", actualizarEstadoReplace)


btnClear.addEventListener("click", function(){
    textarea.value = "";
    actualizarContador()
})

btnReplaceAll.addEventListener("click", function(){
    palabraBuscar = document.getElementById("fromtxt").value.trim()
    plabraRemplazar = document.getElementById("totxt").value.trim()
    let split = textarea.value.split(" ")
    for( let i = 0; i < split.length; i++){
        if (split[i].toLowerCase() === palabraBuscar.toLowerCase()){
            split[i] = plabraRemplazar
        }
    }
    textarea.value = split.join(" ")
    actualizarContador()
})

