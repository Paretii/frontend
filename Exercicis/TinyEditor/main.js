console.log('Hi, Editor!');

let container = document.getElementById("container")

let textarea = document.getElementById("content")

let countText =document.getElementById("count")

let palabraBuscar = document.getElementById("fromtxt").value

let plabraRemplazar = document.getElementById("totxt").value

let btnReplaceAll = document.getElementById("replace")

let btnClear = document.getElementById("clear")

countText.textContent = textarea.value.length
if(textarea.value.length <= 0){
    btnClear.setAttribute("disabled", "true")
}else{
    btnClear.removeAttribute("disabled")
}
textarea.addEventListener("input", function (event) {
    countText.textContent = textarea.value.length
    if(textarea.value.length <= 0){
        btnClear.setAttribute("disabled", "true")
    }else{
        btnClear.removeAttribute("disabled")
    }
})
btnClear.addEventListener("click", function(){
    textarea.value = "";
    countText.textContent = textarea.value.length
    btnClear.setAttribute("disabled", "true")
})

btnReplaceAll.addEventListener("click", function(){
    let split = textarea.value.split(" ")    
    for( let i = 0; i < split.length; i++){
        if (split[i].toLowerCase() === palabraBuscar.toLowerCase()){
            split[i] = plabraRemplazar
        }
    }
    textarea.value = split.join(" ")
    
})

