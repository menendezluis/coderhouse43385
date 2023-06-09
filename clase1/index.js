import Contador from "contador";
const contador1 = new Contador("Responsable 1");
contador1.incrementar();
contador1.incrementar();
console.log(contador1.obtenerContadorIndividual()); // Output: 2
