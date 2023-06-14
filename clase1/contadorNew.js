class Contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.valor = 0;
    Contador.contadorGlobal++;
  }

  static contadorGlobal = 0;
  static nacionalidad = "Argentina";

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
}

let contador1 = new Contador("Bruno Lezcano");
contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
let contador2 = new Contador("Ivan Ramirez");

console.log(contador1.getResponsable());
console.log(contador1.obtenerValor());

console.log(contador2.getResponsable());
contador2.incrementar();

console.log(contador2.obtenerValor());

console.log(Contador.obtenerContadorGlobal());
