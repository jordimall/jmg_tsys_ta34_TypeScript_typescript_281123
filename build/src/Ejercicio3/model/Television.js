"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisor = void 0;
const ConsumoEnergetico_1 = require("../enum/ConsumoEnergetico");
const Color_1 = require("../enum/Color");
const Electrodomestico_1 = require("./Electrodomestico");
class Televisor extends Electrodomestico_1.Electrodomestico {
    resolucion;
    fourk;
    constructor(color = Color_1.COLOR_DEFECTO, consumoEnergetico = ConsumoEnergetico_1.CONSUMO_ENERJETICO_DEFECTO, peso = 5, precioBase = 100, resolucion = 20, fourk = false) {
        super(color, consumoEnergetico, peso, precioBase);
        this.resolucion = resolucion;
        this.fourk = fourk;
    }
    getResolucion = () => {
        return this.resolucion;
    };
    getFourk = () => {
        return this.fourk;
    };
    precioFinal = () => {
        let incremento = this.precioBase;
        switch (this.consumoEnergetico.toString()) {
            case "A":
                incremento += 100;
                break;
            case "B":
                incremento += 80;
                break;
            case "C":
                incremento += 60;
                break;
            case "D":
                incremento += 50;
                break;
            case "E":
                incremento += 30;
                break;
            default:
                incremento += 10;
                break;
        }
        if (this.peso >= 0 && this.peso < 20) {
            incremento += 10;
        }
        else if (this.peso >= 20 && this.peso < 50) {
            incremento += 50;
        }
        else if (this.peso >= 50 && this.peso < 80) {
            incremento += 80;
        }
        else if (this.peso >= 80) {
            incremento += 100;
        }
        if (this.resolucion > 40) {
            incremento *= 1.3;
        }
        if (this.fourk) {
            incremento += 50;
        }
        return incremento;
    };
}
exports.Televisor = Televisor;
