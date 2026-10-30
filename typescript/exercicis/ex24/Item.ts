export class Item {
    Nom: string;
    Descripcio: string;
    Pes: number;

    constructor(nom: string, descripcio: string, pes: number) {
        this.Nom = nom
        this.Descripcio = descripcio
        this.Pes = pes
    }

    get nom(): string {
        return this.Nom;
    }

    set nom(nom: string) {
        this.Nom = nom;
    }

    get descripcio(): string {
        return this.Descripcio;
    }

    set descripcio(descripcio: string) {
        this.Descripcio = descripcio;
    }

    get pes(): number {
        return this.Pes;
    }
    set pes(pes: number) {
        this.Pes = pes;
    }
}

