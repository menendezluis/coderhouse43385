import express from "express";
import { Command } from "commander";
import fork from "child_process";
import Config from "./config.js";

const app = express();
const program = new Command();

program
  .option("--mode <mode>", "Modo de ejecución", "prod")
  .option("-p <port>", "Puerto para el servidor", "8080");

program.parse();

const options = program.opts();
const environment = Config(options.mode);

app.get("/", (req, res) => {
  res.send("Hola mundo");
});
app.get("/suma", (req, res) => {
  const child = fork.fork("./operacionCompleja.js");
  child.send("iniciamos el calculo");
  child.on("message", (resultado) => {
    res.send({ resultado });
  });
  //const resultado = operacionCompleja();
});

app.listen(environment.PORT, () => {
  console.log(
    "Servidor escuchando en el puerto",
    environment.PORT,
    "en modo",
    environment.ENVIRONMENT
  );
});

process.on("exit", (code) => {
  console.log("Código de salida:", code);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.log("Error inesperado", err);
});

process.on("message", (message) => {
  console.log("Mensaje recibido:", message);
});

//console(); //esta sentencia genera un error inesperado
