let valores = [1, 2, 3, 4, 5, 6, 7];
let valoresModificados = valores.map((dato) => dato * 2);
let remplezarValores = valores.map((x) => "a");
//console.log(remplezarValores);
const functionCallback = (dato) => {
  if (dato % 2 == 0) {
    return dato;
  } else {
    return false;
  }
};

let miPropioCallback = valores.map(functionCallback);
//console.log("usando el map de javascript", miPropioCallback);
///nuestra propia map

const funcionMap = (arreglo, callback) => {
  let nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    let nuevoValor = callback(arreglo[i]);
    nuevoArreglo.push(nuevoValor);
  }
  return nuevoArreglo;
};

//console.log("usando nuestro map", funcionMap(valores, functionCallback));

const sumar = (numeroA, numeroB) => numeroA + numeroB;
const restar = (numeroA, numeroB) => numeroA - numeroB;
const multiplicar = (numeroA, numeroB) => numeroA * numeroB;
const dividir = (numeroA, numeroB) => numeroA / numeroB;

const operacion = (numeroA, numeroB, callback) => {
  console.log("no se que operacion realizare, pero estamos listos.....");

  let resultado = callback(numeroA, numeroB);
  console.log(resultado);
};
//operacion(1, 2, sumar);
//operacion(10, 3, restar);
//operacion(3, 3, multiplicar);
//operacion(81, 9, dividir);

const divisionConPromesa = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    console.log("ahora vamos a esperar la promesa");
    setTimeout(() => {
      if (divisor === 0) {
        reject("no se pueden hacer divisiones entre cero");
      } else {
        resolve(dividendo / divisor);
      }
    }, 5000);
  });
};

divisionConPromesa(3, 4)
  .then((resultado) => console.log("el resultado es: ", resultado))
  .catch((error) => console.error(error));

const asincronismoFlecha = async () => {
  try {
    let resultado = await divisionConPromesa(3, 4);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};

asincronismoFlecha();
