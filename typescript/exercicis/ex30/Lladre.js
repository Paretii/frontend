import { Personatge } from "./Personatge.js";
import * as utils from "./utils.js";
export class Lladre extends Personatge {
    _boti;
    constructor(nom, boti) {
        super(nom);
        this._boti = boti;
    }
    get boti() {
        return this._boti;
    }
    atacar() {
        return this.nom + " es un lladre amb " + this._boti + " i te " + this.atac + " de atac";
    }
    esquivar() {
        let num = utils.nombreAleatori(1, 100);
        return num <= 50;
    }
}
//# sourceMappingURL=Lladre.js.map