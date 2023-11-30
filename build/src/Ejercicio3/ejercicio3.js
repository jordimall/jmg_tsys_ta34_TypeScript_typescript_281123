"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejercicio3 = void 0;
const Electrodomestico_1 = require("./model/Electrodomestico");
const Lavadora_1 = require("./model/Lavadora");
const Television_1 = require("./model/Television");
let electrodomesticos = [
    new Electrodomestico_1.Electrodomestico(),
    new Electrodomestico_1.Electrodomestico("Negro", "a"),
    new Electrodomestico_1.Electrodomestico("AZUL", "B", 20, 200),
    new Lavadora_1.Lavadora(),
    new Lavadora_1.Lavadora("Rojo", "C", 50, 120),
    new Lavadora_1.Lavadora("gris", "g", 50, 120, 100),
    new Television_1.Televisor(),
    new Television_1.Televisor("Blanco", "g", 50, 100),
    new Television_1.Televisor("Negro", "a", 50, 100, 50, false),
    new Television_1.Televisor("Blanco", "f", 50, 100, 100, true),
];
const ejercicio3 = () => {
    let totalElectrodomestico = 0;
    let totalLavadora = 0;
    let totalTelevisor = 0;
    electrodomesticos.map(electrodomestico => {
        let precioFinal = electrodomestico.precioFinal();
        if (electrodomestico instanceof Lavadora_1.Lavadora) {
            totalLavadora += precioFinal;
        }
        if (electrodomestico instanceof Television_1.Televisor) {
            totalTelevisor += precioFinal;
        }
        totalElectrodomestico += precioFinal;
    });
    console.log(`El precio total de los electrodomesticos es de ${totalElectrodomestico}€`);
    console.log(`El precio total de las lavadoras es de ${totalLavadora}€`);
    console.log(`El precio total de los televisores es de ${totalTelevisor}€`);
};
exports.ejercicio3 = ejercicio3;
