let arreglo = ["valor1", "valor2", "valor3", "agua", "azul"];

//let existeElemento = arreglo.includes("cafe");
//let elemento = arreglo.filter((dat) => "agua" == dat);

//console.log(existeElemento);
//console.log(elemento);

let numero = 5;

//console.log(5 ** 2);

let arrayElements = [1, 2, 3, 4, 5, 6, 7, 9];

let arrayTransformado = arrayElements.map((dato, index) => dato ** index);
let arrayConSuma = arrayElements.map((dato, index) => dato + index);

//console.log(arrayTransformado);

//console.log(arrayConSuma);

let cursoBackend = {
  alumnos: 88,
  plataforma: "Zoom",
  academia: "Coderhouse",
  localidad: "Argentina y todo mundo",
  idioma: "Español",
  Listaalumnos: [
    { alumno1: "Jhoceliz" },
    { alumno2: "Thomas" },
    { alumno3: "Ignacio" },
  ],
};
//console.log(cursoBackend);
//console.log(cursoBackend.alumnos);
console.log(".....///////.......");

//console.log(Object.entries(cursoBackend));
//console.log(".....///////.......");
let myKeys = Object.keys(cursoBackend);

//console.log(cursoBackend[myKeys[0]]);
/*myKeys.forEach((dato) => {
  console.log(`${dato}: ${cursoBackend[dato]}`);
});

console.log(cursoBackend.alumnos);
console.log(cursoBackend.plataforma);
console.log(cursoBackend.academia);
console.log(cursoBackend.localidad);
*/
let compraTotal = [25, 12, 11, 45, 22, 89].reduce(
  (puntero, acumulado) => puntero + acumulado
);

//console.log("el total de la compra es", compraTotal);

let object1 = {
  propiedad1: 1,
  propiedad2: 2,
  prodiedad3: 3,
};
let object2 = {
  propieda4: 4,
  propiedad5: 5,
  prodiedad6: 6,
};
let objeto3 = { ...object1, ...object2 };
//console.log(objeto3);

let object4 = {
  a: 1,
  b: 2,
  c: 3,
};
let { a, ...rest } = object4;
//console.log(rest);

const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

let productos = [];
let total = 0;

objetos.forEach((dato) => {
  let temporalArray = Object.keys(dato);
  // console.log(temporalArray);
  temporalArray.forEach((temporalDato) => {
    if (!productos.includes(temporalDato)) {
      productos.push(temporalDato);
    }
  });
});

objetos.forEach((dato) => {
  let temporalArray = Object.values(dato);
  let temporalTotal = temporalArray.reduce(
    (valorActual, Acumulado) => valorActual + Acumulado
  );
  total = total + temporalTotal;
});

console.log("Productos para vendidos:", productos);
console.log("Total a pagar:", total);
