"use strict";
console.log("Hola mundo!");
let nombre = "Juan";
nombre = "Veronica Casarez";
const edad = 34;
let casado = false;
let fecha = new Date().toISOString();
console.log(edad, casado, fecha);
function saludar(nombre) {
    console.log("Hola", nombre);
}
function sumar(a, b) {
    return a + b;
}
saludar("Veronica");
console.log(sumar(1, 2));
function crearPersona(persona) {
    console.log("se creo la persona", persona);
}
crearPersona({
    nombre: "Juan",
    apellido: "perez",
    edad: 34,
    vehiculo: {
        marca: "toyota",
        color: "rojo",
        modelo: "corolla",
    },
});
