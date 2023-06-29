import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo desde express!");
});

app.get("/saludo", (req, res) => {
  res.send("Hola estoy cambiando para probar nodemon!");
});

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080 desde express");
});
// //paso1 npm init -y
// //paso2 configurar package.json agregar "type": "module",
// paso 3 instalar express "npm install express"  en la linea de comandos
// //paso importar "import express from "express";"
