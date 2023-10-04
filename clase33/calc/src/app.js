import express from "express";
import { operation } from "./utils.js";

const app = express();

app.get("/:action", (req, res) => {
  const { action } = req.params;
  const { num1, num2 } = req.query;

  if (!action || !num1 || !num2) {
    res.status(400).send("Faltan parametros");
  }
  const result = operation(num1, num2, action);

  res.json({
    result,
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
