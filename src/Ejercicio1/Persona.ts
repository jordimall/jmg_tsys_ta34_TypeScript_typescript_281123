import { enumSexo, SEXO_DEFECTO } from "./enumSexo";

export class Persona {
    private nombre: string;
    private edad: number;
    private dni: string;
    private sexo: enumSexo;
    private peso: number;
    private altura: number;

    constructor(
        dni: string,
        nombre: string = "",
        edad: number = 0,
        sexo: enumSexo = SEXO_DEFECTO,
        peso: number = 0,
        altura: number = 0,
    ) {
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
