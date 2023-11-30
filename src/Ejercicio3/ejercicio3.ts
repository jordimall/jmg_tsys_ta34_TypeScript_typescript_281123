import { Electrodomestico } from "./model/Electrodomestico";
import { Lavadora } from "./model/Lavadora";
import { Televisor } from "./model/Television";

let electrodomesticos = [
    new Electrodomestico(),
    new Electrodomestico("Negro", "a"),
    new Electrodomestico("AZUL", "B", 20, 200),
    new Lavadora(),
    new Lavadora("Rojo", "C", 50, 120),
    new Lavadora("gris", "g", 50, 120, 100),
    new Televisor(),
    new Televisor("Blanco", "g", 50, 100),
    new Televisor("Negro", "a", 50, 100, 50, false),
    new Televisor("Blanco", "f", 50, 100, 100, true),
];

export const ejercicio3 = (): void => {
    let totalElectrodomestico: number = 0;
    let totalLavadora: number = 0;
    let totalTelevisor: number = 0;
    electrodomesticos.map(electrodomestico => {
        let precioFinal: number = electrodomestico.precioFinal();

        if (electrodomestico instanceof Lavadora) {
            totalLavadora += precioFinal;
        }

        if (electrodomestico instanceof Televisor) {
            totalTelevisor += precioFinal;
        }

        totalElectrodomestico += precioFinal;
    });

    console.log(
        `El precio total de los electrodomesticos es de ${totalElectrodomestico}€`,
    );

    console.log(
        `El precio total de las lavadoras es de ${totalLavadora}€`,
    );

    console.log(
        `El precio total de los televisores es de ${totalTelevisor}€`,
    );
};
