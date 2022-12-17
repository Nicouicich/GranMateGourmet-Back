"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tatis = void 0;
class Tatis {
    constructor() {
        this.nombre = 'luca';
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nombre) {
        this.nombre = nombre;
    }
}
exports.Tatis = Tatis;
const luca = new Tatis();
console.log(luca.Nombre);
