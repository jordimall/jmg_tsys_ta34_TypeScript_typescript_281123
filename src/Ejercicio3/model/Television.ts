import {
    ConsumoEnergetico,
    CONSUMO_ENERJETICO_DEFECTO,
} from "../enum/ConsumoEnergetico";
import { Color, COLOR_DEFECTO } from "../enum/Color";
import { Electrodomestico } from "./Electrodomestico";

export class Televisor extends Electrodomestico {
    private resolucion: number;
    private fourk: boolean;

    constructor(
        color: Color | string = COLOR_DEFECTO,
        consumoEnergetico:
            | ConsumoEnergetico
            | string = CONSUMO_ENERJETICO_DEFECTO,
        peso: number = 5,
        precioBase: number = 100,
        resolucion: number = 20,
        fourk: boolean = false,
    ) {
        super(color, consumoEnergetico, peso, precioBase);
        this.resolucion = resolucion;
        this.fourk = fourk;
    }

    private getResolucion = (): number => {
        return this.resolucion;
    };

    private getFourk = (): boolean => {
        return this.fourk;
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

        if (this.resolucion > 40) {
            incremento *= 1.3;
        }

        if (this.fourk) {
            incremento += 50;
        }

        return incremento;
    };
}
