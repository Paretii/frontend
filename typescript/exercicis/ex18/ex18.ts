type Rol = "Base" | "Editor" | "Admin"

interface Usuari {
    nom: string;
    rols: Rol[];
    temaEditar?: string;
    temaModerar?: string;
}

let usuaris: Usuari[] = [];
let superusuaris: Usuari[] = [];



let nom = document.getElementById("nom") as HTMLInputElement
let rolBase = document.getElementById("rolBase") as HTMLInputElement
let rolEditor = document.getElementById("rolEditor") as HTMLInputElement
let rolAdmin = document.getElementById("rolAdmin") as HTMLInputElement
let temaEditar = document.getElementById("temaEditar") as HTMLInputElement
let temaModerar = document.getElementById("temaModerar") as HTMLInputElement
let resultat = document.getElementById("resultat") as HTMLDivElement

let btnGuardar = document.getElementById("btnGuardar") as HTMLButtonElement
let btnMostrar = document.getElementById("btnMostrar") as HTMLButtonElement

btnGuardar.addEventListener("click", () => {
    let u: Usuari = {
        nom: nom.value,
        rols: [],
    }
    if (rolBase.checked) {
        u.rols.push("Base")
    }
    if (rolEditor.checked) {
        u.rols.push("Editor")
        u.temaEditar = temaEditar.value
    }
    if (rolAdmin.checked) {
        u.rols.push("Admin")
        u.temaModerar = temaModerar.value
    }
    usuaris.push(u)
    if (rolEditor.checked && rolAdmin.checked) {
        superusuaris.push(u)
    }
})

btnMostrar.addEventListener("click", () => {
    resultat.innerHTML = "<h3>Usuaris</h3>"
    for (const u of usuaris) {
        resultat.innerHTML += `Nom: ${u.nom}, Rols: ${u.rols.join(", ")}`
        if (u.temaEditar) resultat.innerHTML += `, Tema a editar: ${u.temaEditar}`
        if (u.temaModerar) resultat.innerHTML += `, Tema a moderar: ${u.temaModerar}`
        resultat.innerHTML += "<br>"
    }
    resultat.innerHTML += "<h3>Superusuaris</h3>"
    for (const u of superusuaris) {
        resultat.innerHTML += `Nom: ${u.nom}, Tema a editar: ${u.temaEditar}, Tema a moderar: ${u.temaModerar}<br>`
    }
})