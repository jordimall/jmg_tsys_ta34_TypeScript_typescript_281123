"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
class Password {
    constructor(longitud = 8) {
        this.longitud = longitud;
        this.contrasena = this.generarContrasena();
    }
    generarContrasena() {
        let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let contrasena = "";
        for (let i = 0; i < this.longitud; i++) {
            contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return contrasena;
    }
}
exports.Password = Password;
