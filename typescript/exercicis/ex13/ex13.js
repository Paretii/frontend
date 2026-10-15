let vehicles = [];
let btnGuardar = document.getElementById("btnGuardar");
let btnMostrar = document.getElementById("btnMostrar");
let tbodyVehicles = document.getElementById("tbodyVehicles");
let tipus = document.getElementById("tipus");
let temps = document.getElementById("carrega");
if (tipus.value === "bicicleta") {
    temps.classList.add("desactive");
}
tipus.addEventListener("change", (e) => {
    console.log("dentro");
    if (tipus.value === "bicicleta") {
        temps.classList.add("desactive");
    }
    else {
        temps.classList.remove("desactive");
    }
});
btnGuardar.addEventListener("click", () => {
    let fabiricant = document.getElementById("fabricant").value;
    let model = document.getElementById("model").value;
    let tempsCarrega = document.getElementById("tempsCarrega").valueAsNumber;
    let v1;
    if (tipus.value === "patinet") {
        v1 = {
            fabricant: fabiricant,
            model: model,
            tempsCarrega: tempsCarrega
        };
    }
    else {
        v1 = {
            fabricant: fabiricant,
            model: model,
        };
    }
    vehicles.push(v1);
});
btnMostrar.addEventListener("click", () => {
    tbodyVehicles.innerHTML = "";
    vehicles.forEach((v) => {
        let tr = document.createElement("tr");
        let tdTipus = document.createElement("td");
        let tdTempsCarrega = document.createElement("td");
        if ("tempsCarrega" in v) {
            tdTipus.textContent = "Patinet";
            tdTempsCarrega.textContent = v.tempsCarrega + "";
        }
        else {
            tdTipus.textContent = "Bicicleta";
            tdTempsCarrega.textContent = "-";
        }
        let tdFabricant = document.createElement("td");
        let tdModel = document.createElement("td");
        tdFabricant.textContent = v.fabricant;
        tdModel.textContent = v.model;
        tr.append(tdTipus);
        tr.append(tdFabricant);
        tr.append(tdModel);
        tr.append(tdTempsCarrega);
        tbodyVehicles.appendChild(tr);
    });
});
export {};
//# sourceMappingURL=ex13.js.map