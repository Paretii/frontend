type Bicicleta= {
    fabricant: string;
    model: string;
}
type Patinet = {
    fabricant: string;
    model: string;
    tempsCarrega: number;
}
type Vehicle = Bicicleta | Patinet

let array: Vehicle[] = []


let btnGuardar = document.getElementById("btnGuardar") as HTMLButtonElement;
let btnMostrar = document.getElementById("btnMostrar") as HTMLButtonElement;

btnGuardar.addEventListener("click", () => {
    let v1:Vehicle = {
        fabricant: (document.getElementById("fabricant") as HTMLInputElement).value,
        model: (document.getElementById("model") as HTMLInputElement).value
    }
})