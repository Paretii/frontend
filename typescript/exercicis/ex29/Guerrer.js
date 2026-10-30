import { Personatge } from "./Personatge.js";
export class Guerrer extends Personatge {
    _arma;
    constructor(nom, arma) {
        super(nom);
        this._arma = arma;
    }
    get arma() {
        return this._arma;
    }
    atacar() {
        return `${this.nom} (Guerrer) ataca amb l'arma ${this._arma} (atac: ${this.atac}).`;
    }
}
//# sourceMappingURL=Guerrer.js.map