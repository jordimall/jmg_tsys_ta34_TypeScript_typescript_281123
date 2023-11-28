export class Password {
    longitud: number;
    contrasena: string;

    constructor(longitud: number = 8) {
        this.longitud = longitud;
        this.contrasena = this.generarContrasena();
    }

    private generarContrasena(): string {
        let caracteres =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let contrasena = "";
        for (let i = 0; i < this.longitud; i++) {
            contrasena += caracteres.charAt(
                Math.floor(Math.random() * caracteres.length),
            );
        }
        return contrasena;
    }
}
