/*process.argv.forEach((val, index) => {
  if (index >= 2) {
    console.log(`El argumento ${index} es: ${val}`);
  }
});
*/
console.log(process.argv);
//console.log(process.argv.slice(-1));

console.log("El entorno es: ", process.argv[2]);
console.log("El puerto es: ", process.argv[3]);
console.log("La base de datos es: ", process.argv[4]);
console.log("El usuario es: ", process.argv[5]);
