var nombre = "Juan";
var apellido = "Perez";

//console.log("hola mi nombre es " + nombre + " " + apellido);
//console.log("hola mundo desde la terminal");
//console.warn("esto es un warning");

var myArray = [1, "a", true, { nombre: "Juan", apellido: "Perez" }, null];
//myArray.forEach((dat) => console.log(typeof dat));
//console.log(myArray);

const GRAVITY = 9.8;
const PI = 3.146;
const DAYHOURS = 24;
let TEMP = 21;

//practica actividad en clase
let edad = 33;
let precio = 99.99;
let series = [
  "Game of Thrones",
  "breaking bad",
  "Better Call Saul",
  "Succession",
  "The Last of Us",
];
let peliculas = [
  "John Wick 4",
  "Son como amigos",
  "Donde estan las rubias",
  "Super Mario Bross",
  "Guardianes de la galaxia",
];

let randomNumber = parseInt(Math.random() * series.length);
console.log(randomNumber);
console.log("Hola mi nombres " + nombre + " " + apellido);
console.log("tengo" + edad + " " + " años");
console.log("mi serie favorita es " + series[randomNumber]);
console.log("la ultima pelicula que vi fue " + peliculas[randomNumber]);

/*
const lista = [1,2,3,4,5]
lista.push(6)
lista.pop()
typeof lista

*/

let numero = 10;
console.log("");
numero = "diez";
