import moment from "moment";

let nowTime = moment();
let fechaDeNacimiento = moment("1990-01-01", "YYYY-MM-DD");

console.log("Es una fecha valida", fechaDeNacimiento.isValid() ? "SI" : "NO");
console.log(
  "Desde que naciste hasta hoy, han transcurrido",
  nowTime.diff(fechaDeNacimiento, "days"),
  "dias"
);
