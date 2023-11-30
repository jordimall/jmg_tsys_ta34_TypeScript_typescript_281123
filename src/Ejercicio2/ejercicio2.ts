import { Password } from "./Password";

let password1 = new Password();
let password2 = new Password(12);

export const ejercicio2 = (): void => {
    console.log(password1);
    console.log(password2);
};
