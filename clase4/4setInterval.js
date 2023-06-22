let contador = () => {
  let counter = 0;
  console.log("Realizando operacion");
  let timer = setInterval(() => {
    console.log(counter++);

    if (counter > 15) {
      clearInterval(timer);
    }
  }, 200);
};

console.log("Iniciando tarea");
contador();

console.log("Finalizando tarea");
