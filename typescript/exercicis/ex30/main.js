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
    let atacant = jugador1;
    let defensor = jugador2;
    while (jugador1.puntsVida > 0 && jugador2.puntsVida > 0) {
        turno(atacant, defensor);
        divJugador1.innerHTML = actualizarInfo(jugador1);
        divJugador2.innerHTML = actualizarInfo(jugador2);
        [atacant, defensor] = [defensor, atacant];
    }
    divRegistre.innerHTML += `<p>${defensor.nom} ha guanyat la partida</p>`;
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
function turno(atacant, defensor) {
    divRegistre.innerHTML += `<p>${atacant.atacar()}</p>`;
    if (defensor.esquivar()) {
        divRegistre.innerHTML += `<p>${defensor.nom} ha esquivat l'atac</p>`;
    }
    else {
        divRegistre.innerHTML += `<p>${defensor.nom} no ha esquivat l'atac</p>`;
        defensor.puntsVida = defensor.puntsVida - atacant.atac;
    }
    divRegistre.innerHTML += `<p>A ${defensor.nom} li queden ${defensor.puntsVida} punts de vida</p>`;
}
function comprobarFinal(vivo, muerto) {
    if (muerto.puntsVida <= 0) {
        return true;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=main.js.map