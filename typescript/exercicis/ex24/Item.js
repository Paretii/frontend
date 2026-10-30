export class Item {
    Nom;
    Descripcio;
    Pes;
    constructor(nom, descripcio, pes) {
        this.Nom = nom;
        this.Descripcio = descripcio;
        this.Pes = pes;
    }
    get nom() {
        return this.Nom;
    }
    set nom(nom) {
        this.Nom = nom;
    }
    get descripcio() {
        return this.Descripcio;
    }
    set descripcio(descripcio) {
        this.Descripcio = descripcio;
    }
    get pes() {
        return this.Pes;
    }
    set pes(pes) {
        this.Pes = pes;
    }
}
//# sourceMappingURL=Item.js.map