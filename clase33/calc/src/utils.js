import * as MATH from "math43385";

export const operation = (num1, num2, operation) => {
  num1 = Number(num1);
  num2 = Number(num2);
  console.log(num1, num2, operation);
  switch (operation) {
    case "sumar":
      return MATH.suma(num1, num2);
    case "restar":
      return MATH.resta(num1, num2);
    case "multiplicar":
      return MATH.multiplicacion(num1, num2);
    case "dividir":
      return MATH.division(num1, num2);
    case "potenciar":
      return MATH.potencia(num1, num2);
    case "raiz":
      return MATH.raiz(num1);
    case "multiplicarPorPI":
      return MATH.multiplicacionPorPI(num1);
    default:
      return "Operacion no valida";
  }
};
