import cluster from "cluster";
import express from "express";
import { cpuNumbers } from "./utils/checkCpu.js";

const isPrimary = cluster.isPrimary;

if (isPrimary) {
  console.log("soy el proceso principal", "generando proceso trabajador");
  for (let x = 0; x < cpuNumbers; x++) {
    cluster.fork();
  }
  cluster.on("message", (worker, message) => {
    //console.log(`Mensaje recibido del proceso ${worker.process.pid}`);
    //console.log(message);
  });

  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `El proceso ${worker.process.pid} ha salido con el codigo ${code} y la señal ${signal}`
    );
    console.log("Generando nuevo proceso");
    cluster.fork();
  });
} else {
  const app = express();
  app.get("/", (req, res) => {
    res.json({
      message: `Hola mundo desde el worker ${process.pid} con Docker`,
    });
  });

  app.get("/operacionsencilla", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }

    res.send(`Suma: ${sum}`);
  });

  app.get("/operaciondificil", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 5e10; i++) {
      sum += i;
    }

    res.send(`Suma: ${sum}`);
  });
  app.listen(8080, () => {
    console.log("Server started on port 8080 " + process.pid);
  });
  process.send({ message: "Hola soy un proceso worker" });
}
