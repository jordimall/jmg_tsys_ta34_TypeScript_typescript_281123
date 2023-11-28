"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const enumSexo_1 = require("./enumSexo");
class Persona {
    constructor(dni, nombre = "", edad = 0, sexo = enumSexo_1.SEXO_DEFECTO, peso = 0, altura = 0) {
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
exports.Persona = Persona;
