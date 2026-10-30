export class Personatge {
    Nom;
    Atac = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    PuntaVida = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    constructor(nom) {
        this.Nom = nom;
    }
    atacar() {
        return "atac basic";
    }
}
//# sourceMappingURL=Personatge.js.map