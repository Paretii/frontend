import { Personatge } from "./Personatge.js";
import * as utils from "./utils.js";
export class Mag extends Personatge {
    _poderMagic;
    constructor(nom, poderMagic) {
        super(nom);
        this._poderMagic = poderMagic;
    }
    get poderMagic() {
        return this._poderMagic;
    }
    atacar() {
        return this.nom + " es un mag amb " + this._poderMagic + " i te " + this.atac + " de atac";
    }
    esquivar() {
        let num = utils.nombreAleatori(1, 100);
        return num <= 35;
    }
}
//# sourceMappingURL=Mag.js.map