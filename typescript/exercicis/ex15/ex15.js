let map;
map = L.map("map").setView([41.54633, 2.10589], 14);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);
let llocs = [];
const grupMarcadors = L.layerGroup().addTo(map);
let btnAfegir = document.getElementById("btnAfegir");
let btnHistoric = document.getElementById("btnHistoric");
btnAfegir.addEventListener("click", (e) => {
    let nom = document.getElementById("nom").value;
    let latitud = document.getElementById("latitud").valueAsNumber;
    let longitud = document.getElementById("longitud").valueAsNumber;
    let lloc = [nom, latitud, longitud];
    console.log(lloc);
    llocs.push(lloc);
    grupMarcadors.clearLayers();
    crearMarcador(lloc);
    map.setView([latitud, longitud], 15);
});
btnHistoric.addEventListener("click", (e) => {
    let llista = document.getElementById("llista");
    llista.innerHTML = " ";
    llocs.forEach((lloc) => {
        crearMarcador(lloc);
        const [nom, latitud, longitud] = lloc;
        let li = document.createElement("li");
        li.textContent = "Nom: " + nom + " Latitud: " + latitud + " Longitud: " + longitud;
        llista.appendChild(li);
    });
});
function crearMarcador(lloc) {
    const [nom, latitud, longitud] = lloc;
    const marcador = L.marker([latitud, longitud]).addTo(grupMarcadors);
    marcador.bindPopup(`<b>${nom}</b><br>Lat: ${latitud}<br>Lon: ${longitud}`).openPopup();
}
export {};
//# sourceMappingURL=ex15.js.map