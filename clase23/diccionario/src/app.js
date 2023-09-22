import express from "express";

const app = express();

app.get("*", (req, res) => {
  res.status(404).send({ error: "Not found" });
});

app.listen(3131, () => {
  console.log("Server started");
});
