export function nombreAleatori(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function obtenirElement<T extends HTMLElement>(id: string): T {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`No existeix cap element amb l'id "${id}"`);
    }
    return element as T;
}