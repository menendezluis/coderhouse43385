let myArray = [
  {
    nombre: "Gabriel",
    apellido: "Bertelloti",
  },
  {
    nombre: "Facundo",
    apellido: "Aliata",
  },
  {
    nombre: "Ivan",
    apellido: "Fuentes",
  },
];

console.log(typeof myArray);

myArray.forEach((elemento) => {
  console.log(typeof elemento);
  console.log(typeof elemento.nombre);
});
