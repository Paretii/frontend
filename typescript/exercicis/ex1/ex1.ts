const inputNum  = document.getElementById("inputNumero") as HTMLInputElement;
const btnValidar = document.getElementById("btnValidar") as HTMLButtonElement;
btnValidar.addEventListener("click", (e: Event) => {
    let numRandom :number  = randomInt(1,100)
    let num= parseInt(inputNum.value);
    console.log(num)
    console.log(numRandom)
    let resultado = document.getElementById("resultado") as HTMLParagraphElement;
    if(numRandom >= num && num > 0){
        resultado.textContent = "El numero: " + num + " esta dintre de l'interval " + numRandom;
    }else{
        resultado.textContent = "El numero: " + num + " no esta dintre de l'interval " + numRandom;
    }
})
function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
