"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejercicio1 = void 0;
const Persona_1 = require("./Persona");
const enumSexo_1 = require("./enumSexo");
const persona1 = new Persona_1.Persona("11111111A", "Jordi", 28, enumSexo_1.enumSexo.H, 75, 1.7);
const persona2 = new Persona_1.Persona("22222222B", "Laura", 23, enumSexo_1.enumSexo.M, 63, 1.5);
const persona3 = new Persona_1.Persona("33333333C");
const ejercicio1 = () => {
    console.log(persona1);
    console.log(persona2);
    console.log(persona3);
};
exports.ejercicio1 = ejercicio1;
