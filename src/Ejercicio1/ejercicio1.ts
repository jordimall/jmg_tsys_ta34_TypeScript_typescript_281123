import { Persona } from "./Persona";
import { enumSexo } from "./enumSexo";

const persona1 = new Persona("11111111A", "Jordi", 28, enumSexo.H, 75, 1.7);
const persona2 = new Persona("22222222B", "Laura", 23, enumSexo.M, 63, 1.5);
const persona3 = new Persona("33333333C");

export const ejercicio1 = () => {
    console.log(persona1);
    console.log(persona2);
    console.log(persona3);
};
