console.log("Hola mundo!");

interface Vehiculo {
  marca: string;
  color: string;
  modelo: string;
}

interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  vehiculo?: Vehiculo;
}

let nombre: string = "Juan";
nombre = "Veronica Casarez";

const edad: number = 34;
let casado: boolean = false;
let fecha: string = new Date().toISOString();

console.log(edad, casado, fecha);

function saludar(nombre: string): void {
  console.log("Hola", nombre);
}

function sumar(a: number, b: number): number {
  return a + b;
}

saludar("Veronica");
console.log(sumar(1, 2));

function crearPersona(persona: Persona): void {
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
