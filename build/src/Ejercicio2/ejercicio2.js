"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejercicio2 = void 0;
const Password_1 = require("./Password");
let password1 = new Password_1.Password();
let password2 = new Password_1.Password(12);
const ejercicio2 = () => {
    console.log(password1);
    console.log(password2);
};
exports.ejercicio2 = ejercicio2;
