const cuadrado  = document.getElementById("cuadrado") as HTMLDivElement;
const btnArriba = document.getElementById("btnArriba") as HTMLButtonElement;
const btnAbajo = document.getElementById("btnAbajo") as HTMLButtonElement;
const btnDerecha = document.getElementById("btnDerecha") as HTMLButtonElement;
const btnIzquierda = document.getElementById("btnIzquierda") as HTMLButtonElement;
let x = 0;
let y = 0;
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'ArrowUp':
            moure(x,y-10)
            break;
        case 'ArrowDown':
            moure(x,y+10)
            break;
        case 'ArrowLeft':
            moure(x-10,y)
            break;
        case 'ArrowRight':
            moure(x+10,y)
            break;
    }
})
btnAbajo.addEventListener("click", () => {
    moure(x,y+10)
})
btnArriba.addEventListener("click", () => {
    moure(x,y-10)
})
btnDerecha.addEventListener("click", () => {
    moure(x+10,y)
})
btnIzquierda.addEventListener("click", () => {
    moure(x-10,y)
})

function moure(xNueva:number, yNueva:number){
    if(xNueva >= 0 && yNueva >= 0 && xNueva < 350 && yNueva < 350){
        x = xNueva
        y = yNueva
        cuadrado.style.translate = `${xNueva}px ${yNueva}px`
    }
}