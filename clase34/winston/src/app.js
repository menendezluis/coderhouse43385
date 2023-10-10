import express from "express";
import { addLogger } from "./utils/logger.js";

const app = express();

app.use(express.json());
app.use(addLogger);

app.get("/", (req, res) => {
  req.logger.verbose(`Esto es un verbose ${new Date().toLocaleTimeString()}`);
  //req.logger.warn(`Esto es un warning ${new Date().toLocaleTimeString()}`);
  res.send("Hola mundo");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
