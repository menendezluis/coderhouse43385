import express from "express";

const app = express();

app.get("/bienvenida", (req, res) => {
  res.send('<h1 style="color:red">Hola alumno de Coderhouse</h1>');
});

app.get("/usuario", (req, res) => {
  const usuario = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    dni: 12345678,
  };
  res.json(usuario);
});

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
