"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
const ConsumoEnergetico_1 = require("../enum/ConsumoEnergetico");
const Color_1 = require("../enum/Color");
class Electrodomestico {
    precioBase;
    color;
    consumoEnergetico;
    peso;
    constructor(color = Color_1.COLOR_DEFECTO, consumoEnergetico = ConsumoEnergetico_1.CONSUMO_ENERJETICO_DEFECTO, peso = 5, precioBase = 100) {
        this.color = this.comprobarColor(color);
        this.consumoEnergetico =
            this.comprobarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
        this.precioBase = precioBase;
    }
    getPrecioBase() {
        return this.precioBase;
    }
    getColor() {
        return this.color;
    }
    getConsumoEnergetico() {
        return this.consumoEnergetico;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico = (letra) => {
        if (letra.toUpperCase() in ConsumoEnergetico_1.ConsumoEnergetico) {
            return ConsumoEnergetico_1.ConsumoEnergetico[letra.toUpperCase()];
        }
        else {
            return ConsumoEnergetico_1.ConsumoEnergetico.F;
        }
    };
    comprobarColor = (color) => {
        if (color.toUpperCase() in Color_1.Color) {
            return Color_1.Color[color.toLowerCase()];
        }
        else {
            return Color_1.Color.blanco;
        }
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
        return incremento;
    };
}
exports.Electrodomestico = Electrodomestico;
