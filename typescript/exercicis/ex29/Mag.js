import { Personatge } from "./Personatge.js";
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
}
//# sourceMappingURL=Mag.js.map