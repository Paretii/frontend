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

let vehicles: Vehicle[] = []

let btnGuardar = document.getElementById("btnGuardar") as HTMLButtonElement;
let btnMostrar = document.getElementById("btnMostrar") as HTMLButtonElement;
let tbodyVehicles = document.getElementById("tbodyVehicles") as HTMLTableElement;
let tipus = document.getElementById("tipus") as HTMLSelectElement
let temps = document.getElementById("carrega") as HTMLLabelElement;

if(tipus.value === "bicicleta"){
    temps.classList.add("desactive");
}
tipus.addEventListener("change", (e) => {
    console.log("dentro");
    if(tipus.value === "bicicleta"){
        temps.classList.add("desactive");
    }else{
        temps.classList.remove("desactive");
    }
})

btnGuardar.addEventListener("click", () => {
    let fabiricant = (document.getElementById("fabricant") as HTMLInputElement).value
    let model = (document.getElementById("model") as HTMLInputElement).value
    let tempsCarrega = (document.getElementById("tempsCarrega") as HTMLInputElement).valueAsNumber

    let v1: Vehicle

    if(tipus.value === "patinet"){
        v1 = {
            fabricant: fabiricant,
            model: model,
            tempsCarrega: tempsCarrega
        }
    }else{
        v1 = {
            fabricant: fabiricant,
            model: model,
        }
    }

    vehicles.push(v1)
})
btnMostrar.addEventListener("click", () => {
    tbodyVehicles.innerHTML = ""
    vehicles.forEach((v: Vehicle) => {
        let tr = document.createElement("tr");
        let tdTipus = document.createElement("td");
        let tdTempsCarrega = document.createElement("td");
        if("tempsCarrega" in v) {
            tdTipus.textContent = "Patinet";
            tdTempsCarrega.textContent = v.tempsCarrega + ""
        }else{
            tdTipus.textContent = "Bicicleta";
            tdTempsCarrega.textContent = "-"
        }
        let tdFabricant = document.createElement("td");
        let tdModel = document.createElement("td");
        tdFabricant.textContent = v.fabricant;
        tdModel.textContent = v.model;
        tr.append(tdTipus)
        tr.append(tdFabricant);
        tr.append(tdModel);
        tr.append(tdTempsCarrega);
        tbodyVehicles.appendChild(tr);
    })
})