import {Item} from './Item.js'
export class Inventari {
    CapacitatMax: number;
    Items: Item[];

    constructor(capacitatMax: number,items:Item[]) {
        this.CapacitatMax = capacitatMax
        this.Items = items
    }

    afegirItem(afegir: Item):string {
        let pesTotal: number = 0
        for (let i of this.Items) {
            pesTotal += i.pes
        }
        if ((afegir.pes + pesTotal) <= this.CapacitatMax) {
            this.Items.push(afegir)
            return "S'ha guardat l'item en queda: " + (this.CapacitatMax - (afegir.pes + pesTotal)) + " espai lliure"
        }
        return "No es pot guardad capacitat maxima!"
    }
    get capacitatMax(): number {
        return this.CapacitatMax;
    }
    set capacitatMax(capacitatMax: number) {
        this.CapacitatMax = capacitatMax;
    }

    get items(): Item[] {
        return this.Items;
    }
    set items(items: Item[]) {
        this.Items = items;
    }
    toString(): string {
        let text = "Els items de l'inventari són:<br>";

        for (let i of this.Items) {
            text += `El nom és: ${i.nom}, descripció: ${i.descripcio} i el pes: ${i.pes}.<br>`;
        }
        return text;
    }
}