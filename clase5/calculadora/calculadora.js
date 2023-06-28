const moment = require("moment");

function calcularEdad(fechaNacimiento) {
  const fechaNacimientoMoment = moment(fechaNacimiento, "YYYY-MM-DD");
  const edad = moment().diff(fechaNacimientoMoment, "years");
  return edad;
}

module.exports = {
  calcularEdad,
};
