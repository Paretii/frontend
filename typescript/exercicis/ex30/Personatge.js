import { nombreAleatori } from './utils.js';
export class Personatge {
    _nom;
    _atac = nombreAleatori(1, 10);
    _puntsVida = nombreAleatori(1, 50);
    constructor(nom) {
        this._nom = nom;
    }
    get nom() {
        return this._nom;
    }
    get atac() {
        return this._atac;
    }
    get puntsVida() {
        return this._puntsVida;
    }
    set puntsVida(value) {
        if (value < 0) {
            this._puntsVida = 0;
        }
        else {
            this._puntsVida = value;
        }
    }
}
//# sourceMappingURL=Personatge.js.map