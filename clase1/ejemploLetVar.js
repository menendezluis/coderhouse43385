// scope global
let saludo = "Hola gente";
if (true === true) {
  //scope local
  var despedida = "Adios gente";
  console.log(saludo);
  console.log("Desde la condicion if", despedida);
}
console.log("Quiero llamar a despedida desde afuera", despedida);

///
