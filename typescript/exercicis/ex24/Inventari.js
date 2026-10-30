export class Inventari {
    CapacitatMax;
    Items;
    constructor(capacitatMax, items) {
        this.CapacitatMax = capacitatMax;
        this.Items = items;
    }
    afegirItem(afegir) {
        let pesTotal = 0;
        for (let i of this.Items) {
            pesTotal += i.pes;
        }
        if ((afegir.pes + pesTotal) <= this.CapacitatMax) {
            this.Items.push(afegir);
            return "S'ha guardat l'item en queda: " + (this.CapacitatMax - (afegir.pes + pesTotal)) + " espai lliure";
        }
        return "No es pot guardad capacitat maxima!";
    }
    get capacitatMax() {
        return this.CapacitatMax;
    }
    set capacitatMax(capacitatMax) {
        this.CapacitatMax = capacitatMax;
    }
    get items() {
        return this.Items;
    }
    set items(items) {
        this.Items = items;
    }
    toString() {
        let text = "Els items de l'inventari són:<br>";
        for (let i of this.Items) {
            text += `El nom és: ${i.nom}, descripció: ${i.descripcio} i el pes: ${i.pes}.<br>`;
        }
        return text;
    }
}
//# sourceMappingURL=Inventari.js.map