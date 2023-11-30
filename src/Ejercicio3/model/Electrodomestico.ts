import {
    ConsumoEnergetico,
    CONSUMO_ENERJETICO_DEFECTO,
} from "../enum/ConsumoEnergetico";
import { Color, COLOR_DEFECTO } from "../enum/Color";

export class Electrodomestico {
    protected precioBase: number;
    protected color: Color;
    protected consumoEnergetico: ConsumoEnergetico;
    protected peso: number;

    constructor(
        color: Color | string = COLOR_DEFECTO,
        consumoEnergetico:
            | ConsumoEnergetico
            | string = CONSUMO_ENERJETICO_DEFECTO,
        peso: number = 5,
        precioBase: number = 100,
    ) {
        this.color = this.comprobarColor(color);
        this.consumoEnergetico =
            this.comprobarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
        this.precioBase = precioBase;
    }

    public getPrecioBase(): number {
        return this.precioBase;
    }

    public getColor(): Color {
        return this.color;
    }

    public getConsumoEnergetico(): ConsumoEnergetico {
        return this.consumoEnergetico;
    }

    public getPeso(): number {
        return this.peso;
    }

    private comprobarConsumoEnergetico = (letra: string): ConsumoEnergetico => {
        if (letra.toUpperCase() in ConsumoEnergetico) {
            return ConsumoEnergetico[
                letra.toUpperCase() as keyof typeof ConsumoEnergetico
            ];
        } else {
            return ConsumoEnergetico.F;
        }
    };

    private comprobarColor = (color: string): Color => {
        if (color.toUpperCase() in Color) {
            return Color[color.toLowerCase() as keyof typeof Color];
        } else {
            return Color.blanco;
        }
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

        return incremento;
    };
}
