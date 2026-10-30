//Importaciones de archivos
import * as utils from './utils.js';
import { Guerrer } from './Guerrer.js';
import { Mag } from './Mag.js';
import { Lladre } from './Lladre.js';
//Variables globales
const inputNom = utils.obtenirElement("nom");
const btnJugador1 = utils.obtenirElement("btnJugador1");
const btnJugador2 = utils.obtenirElement("btnJugador2");
const btnIniciar = utils.obtenirElement("btnIniciar");
const estat = utils.obtenirElement("estat");
const divJugador1 = utils.obtenirElement("divJugador1");
const divJugador2 = utils.obtenirElement("divJugador2");
const divRegistre = utils.obtenirElement("divRegistre");
let jugador1 = null;
let jugador2 = null;
//Al recargar la pagina
btnIniciar.disabled = true;
//Btn crear
btnJugador1.addEventListener("click", () => {
    jugador1 = crearPersonatge(inputNom.value);
    btnJugador1.disabled = true;
    estat.textContent = "Jugador 1 creat correctament";
    divJugador1.innerHTML = actualizarInfo(jugador1);
    if (btnJugador2.disabled) {
        btnIniciar.disabled = false;
    }
});
btnJugador2.addEventListener("click", () => {
    jugador2 = crearPersonatge(inputNom.value);
    btnJugador2.disabled = true;
    estat.textContent = "Jugador 2 creat correctament";
    divJugador2.innerHTML = actualizarInfo(jugador2);
    if (btnJugador1.disabled) {
        btnIniciar.disabled = false;
    }
});
btnIniciar.addEventListener("click", () => {
    if (jugador1 === null || jugador2 === null) {
        return;
    }
    while (jugador1.puntsVida > 0 && jugador2.puntsVida > 0) {
        if (utils.nombreAleatori(1, 2) === 1) {
            let p = document.createElement("p");
            p.innerHTML = jugador1.atacar() + "<br>";
            divRegistre.appendChild(p);
            jugador2.puntsVida = jugador2.puntsVida - jugador1.atac;
        }
        else {
            let p = document.createElement("p");
            p.innerHTML = "El jugador 1 a fallat <br>";
            divRegistre.appendChild(p);
        }
        if (utils.nombreAleatori(1, 2) === 1) {
            let p = document.createElement("p");
            p.innerHTML = jugador2.atacar() + "<br>";
            divRegistre.appendChild(p);
            jugador1.puntsVida = jugador1.puntsVida - jugador2.atac;
        }
        else {
            let p = document.createElement("p");
            p.innerHTML = "El jugador 2 a fallat <br>";
            divRegistre.appendChild(p);
        }
        if (jugador1.puntsVida <= 0) {
            let p = document.createElement("p");
            p.innerHTML = "El jugador 2 ha guanyat la partida";
            divRegistre.appendChild(p);
        }
        else if (jugador2.puntsVida <= 0) {
            let p = document.createElement("p");
            p.innerHTML = "El jugador 1 ha guanyat la partida";
            divRegistre.appendChild(p);
        }
    }
});
//Funciones utiles
function crearPersonatge(nom) {
    switch (utils.nombreAleatori(1, 3)) {
        case 1: return new Guerrer(nom, "Espasa");
        case 2: return new Mag(nom, "Bola de foc");
        default: return new Lladre(nom, utils.nombreAleatori(1, 100));
    }
}
function actualizarInfo(personatge) {
    let tipus = "Personatge";
    let atribut = "";
    if (personatge instanceof Guerrer) {
        tipus = "Guerrer";
        atribut = `<p>Arma: ${personatge.arma}</p>`;
    }
    else if (personatge instanceof Mag) {
        tipus = "Mag";
        atribut = `<p>Poder màgic: ${personatge.poderMagic}</p>`;
    }
    else if (personatge instanceof Lladre) {
        tipus = "Lladre";
        atribut = `<p>Botí: ${personatge.boti}</p>`;
    }
    return `
        <h2>${personatge.nom} — ${tipus}</h2>
        ${atribut}
        <p>Atac: ${personatge.atac}</p>
        <p>Punts de vida: ${personatge.puntsVida}</p>
    `;
}
//# sourceMappingURL=main.js.map