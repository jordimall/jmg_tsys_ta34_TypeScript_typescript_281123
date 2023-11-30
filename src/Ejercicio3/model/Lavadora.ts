import {
    ConsumoEnergetico,
    CONSUMO_ENERJETICO_DEFECTO,
} from "../enum/ConsumoEnergetico";
import { Color, COLOR_DEFECTO } from "../enum/Color";
import { Electrodomestico } from "./Electrodomestico";

export class Lavadora extends Electrodomestico {
    private carga: number;

    constructor(
        color: Color | string = COLOR_DEFECTO,
        consumoEnergetico:
            | ConsumoEnergetico
            | string = CONSUMO_ENERJETICO_DEFECTO,
        peso: number = 5,
        precioBase: number = 100,
        carga: number = 5,
    ) {
        super(color, consumoEnergetico, peso, precioBase);
        this.carga = carga;
    }

    private getCarga = (): number => {
        return this.carga;
    };

    public precioFinal = (): number => {
        let incremento: number = this.precioBase;

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
        } else if (this.peso >= 20 && this.peso < 50) {
            incremento += 50;
        } else if (this.peso >= 50 && this.peso < 80) {
            incremento += 80;
        } else if (this.peso >= 80) {
            incremento += 100;
        }

        if (this.carga > 50) {
            incremento += 50;
        }

        return incremento;
    };
}
