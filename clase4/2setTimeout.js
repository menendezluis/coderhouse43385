const temporizador = (callback) => {
  setTimeout(() => {
    callback();
  }, 5000);
};

let operacion = () => console.log("Realizando operacion");

console.log("Iniciando tarea");
temporizador(operacion);
console.log("Continuando operacion");
console.log("Finalizando tarea");

// Iniciando tarea
// Continuando operacion
// Finalizando tarea
// Realizando operacion
