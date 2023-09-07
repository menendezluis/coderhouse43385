import { Command } from "commander";
import Config from "./config.js";

const program = new Command();
console.log(Config);

program
  .option("-d", "Variable para debuguear", false)
  .option("-p <port>", "Puerto para el servidor", "8080")
  .option("--mode <mode>", "Modo de ejecución", "prod")
  .requiredOption(
    "-u <user>",
    "Usuario para la conexión",
    "No se especificó usuario"
  )
  .option("-l, --letters [letters...]", "Letras para el nombre", [
    "a",
    "b",
    "c",
  ]);

program.parse();

//console.log("options:", program.opts());
//console.log("remaining arguments:", program.args);
