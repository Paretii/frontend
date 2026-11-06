import { Personatge } from "./Personatge.js";
import * as utils from "./utils.js";
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
    esquivar() {
        let num = utils.nombreAleatori(1, 100);
        return num <= 20;
    }
}
//# sourceMappingURL=Guerrer.js.map