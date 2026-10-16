declare const L: any;
let map: any;
map = L.map("map").setView([41.54633, 2.10589], 14);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);


type CoordenadaLloc = [string, number, number];

let llocs: CoordenadaLloc[] = []

const grupMarcadors = L.layerGroup().addTo(map);

let btnAfegir = document.getElementById("btnAfegir") as HTMLButtonElement
let btnHistoric = document.getElementById("btnHistoric") as HTMLButtonElement

btnAfegir.addEventListener("click",(e)=>{
    let nom:string  = (document.getElementById("nom") as HTMLInputElement).value
    let latitud:number = (document.getElementById("latitud") as HTMLInputElement).valueAsNumber
    let longitud:number = (document.getElementById("longitud") as HTMLInputElement).valueAsNumber
    let lloc:CoordenadaLloc = [nom,latitud,longitud]
    console.log(lloc)
    llocs.push(lloc)
    grupMarcadors.clearLayers();
    crearMarcador(lloc)
    map.setView([latitud, longitud], 15);
})
btnHistoric.addEventListener("click",(e)=>{
    let llista = document.getElementById("llista") as HTMLUListElement
    llista.innerHTML = " "
    llocs.forEach((lloc: CoordenadaLloc) => {
        crearMarcador(lloc)
        const [nom, latitud, longitud] = lloc;
        let li= document.createElement("li") as HTMLLIElement
        li.textContent = "Nom: " + nom + " Latitud: " + latitud + " Longitud: " + longitud
        llista.appendChild(li)
    })
})
function crearMarcador(lloc:CoordenadaLloc){
    const [nom, latitud, longitud] = lloc;
    const marcador = L.marker([latitud, longitud]).addTo(grupMarcadors);
    marcador.bindPopup(`<b>${nom}</b><br>Lat: ${latitud}<br>Lon: ${longitud}`).openPopup();
}
