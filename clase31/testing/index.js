//a y b deben ser numericos
//si no se pasan parametros devolver 0
// si no se pasa uno de los parametros, devolver unicamente el que si recibimos considerando que el segundo es cero
//console.log(typeof 3);

const validaTipo = (number) => {
  return typeof number;
};

const validaArguments = (datos) => {
  let result = datos.findIndex((dato) => validaTipo(dato) !== "number");
  return result === -1;
};
const generarSuma = (datos) => {
  let result = datos.reduce((acc, curr) => curr + acc);
  return result;
};
const sumar = (...nums) => {
  if (validaArguments(nums) && nums?.length) {
    return generarSuma(nums);
  } else if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  } else {
    return null;
  }
};
console.log("Debe poder sumar cualquier cantidad");
console.log(sumar(11, 11, 11, 11, 11)); //13
console.log(sumar(11, 11, 11, 11)); //13
console.log(sumar(11, 11, 11)); //13
console.log(sumar(11, 11)); //13
console.log(sumar(11)); //13

console.log(
  "Si no le paso uno de los dos devuelte parametro que recibe, considerando una suma de cero"
);
console.log(sumar(-15)); // -15
console.log("Si no le paso devuelve cero");
console.log(sumar()); // 0
console.log("Debe de poder sumar todos los parametros que reciba");
console.log(sumar()); // 0
console.log(sumar("a", 1, 2, 3));
