let usuaris = [];
let superusuaris = [];
let nom = document.getElementById("nom");
let rolBase = document.getElementById("rolBase");
let rolEditor = document.getElementById("rolEditor");
let rolAdmin = document.getElementById("rolAdmin");
let temaEditar = document.getElementById("temaEditar");
let temaModerar = document.getElementById("temaModerar");
let resultat = document.getElementById("resultat");
let btnGuardar = document.getElementById("btnGuardar");
let btnMostrar = document.getElementById("btnMostrar");
btnGuardar.addEventListener("click", () => {
    let u = {
        nom: nom.value,
        rols: [],
    };
    if (rolBase.checked) {
        u.rols.push("Base");
    }
    if (rolEditor.checked) {
        u.rols.push("Editor");
        u.temaEditar = temaEditar.value;
    }
    if (rolAdmin.checked) {
        u.rols.push("Admin");
        u.temaModerar = temaModerar.value;
    }
    usuaris.push(u);
    if (rolEditor.checked && rolAdmin.checked) {
        superusuaris.push(u);
    }
});
btnMostrar.addEventListener("click", () => {
    resultat.innerHTML = "<h3>Usuaris</h3>";
    for (const u of usuaris) {
        resultat.innerHTML += `Nom: ${u.nom}, Rols: ${u.rols.join(", ")}`;
        if (u.temaEditar)
            resultat.innerHTML += `, Tema a editar: ${u.temaEditar}`;
        if (u.temaModerar)
            resultat.innerHTML += `, Tema a moderar: ${u.temaModerar}`;
        resultat.innerHTML += "<br>";
    }
    resultat.innerHTML += "<h3>Superusuaris</h3>";
    for (const u of superusuaris) {
        resultat.innerHTML += `Nom: ${u.nom}, Tema a editar: ${u.temaEditar}, Tema a moderar: ${u.temaModerar}<br>`;
    }
});
export {};
//# sourceMappingURL=ex18.js.map