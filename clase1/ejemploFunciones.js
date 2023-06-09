//funcion que no retorna un valor void
function saludar() {
  console.log("hola que tal!!");
}
function retornaSaludo() {
  return "hola que tal  soy una funcion con retorno!!";
}

const saludarFlecha = () => {
  console.log("hola que tal!!");
};

const retornarSaludoFlecha = () =>
  "hola que tal  soy una funcion con retorno!!";

//saludarFlecha();
//let saludo = retornaSaludo();
//let saludo = retornarSaludoFlecha();

//saludar();
//console.log(saludo);

function sumar(a, b) {
  return a + b;
}
const restar = (a, b) => {
  return a - b;
};

//console.log(sumar(5, 3));
console.log(restar(10, 3));
