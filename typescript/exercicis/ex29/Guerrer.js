import { Personatge } from "./Personatge.js";
export class Guerrer extends Personatge {
    arma;
    constructor(nom, arma) {
        super(nom);
        this.arma = arma;
    }
    atacar() {
        return "hola";
    }
}
//# sourceMappingURL=Guerrer.js.map