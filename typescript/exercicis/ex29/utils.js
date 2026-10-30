export function nombreAleatori(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function obtenirElement(id) {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`No existeix cap element amb l'id "${id}"`);
    }
    return element;
}
//# sourceMappingURL=utils.js.map