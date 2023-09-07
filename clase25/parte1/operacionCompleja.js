process.on("message", (message) => {
  let i = 0;
  while (i < 5e10) {
    i++;
  }
  process.send({
    desdeElPadre: message,
    desdeElHijo: "Terminé de calcular",
    resultado: i,
  });
});
