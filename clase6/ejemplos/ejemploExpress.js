import express from "express";

const app = express();

app.use(express.urlencoded);
/*
app.get("/", (req, res) => {
  res.send("Hola mundo desde express!");
});
*/
app.get("/saludos", (req, res) => {
  res.send("Hola estoy cambiando para probar nodemon!");
});

app.get("/saludo/:curso/:nombre/:apellido", (req, res) => {
  const { curso, nombre, apellido } = req.params;
  res.send(`Hola ${nombre} ${apellido}, bienvenido al curso de" ${curso}`);
});

app.listen(3001, () => {
  console.log("Servidor escuchando en el puerto 3001 desde express");
});
// //paso1 npm init -y
// //paso2 configurar package.json agregar "type": "module",
// paso 3 instalar express "npm install express"  en la linea de comandos
// //paso importar "import express from "express";"
