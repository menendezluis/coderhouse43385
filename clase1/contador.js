class Contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.valor = 0;
    Contador.contadorGlobal++;
  }

  static contadorGlobal = 0;

  incrementar() {
    this.valor++;
  }

  obtenerValor() {
    return this.valor;
  }

  static obtenerContadorGlobal() {
    return Contador.contadorGlobal;
  }

  getResponsable() {
    return this.nombre;
  }

  obtenerContadorIndividual() {
    return this.valor;
  }
}

export default Contador;
