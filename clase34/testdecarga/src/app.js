import express from "express";
import loginRoute from "./routes/login.js";

const app = express();

app.use(express.json());
app.use("/api/session/login", loginRoute);

app.get("/operacionsencilla", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }

  res.send(`Suma: ${sum}`);
});

app.get("/operaciondificil", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 5e8; i++) {
    sum += i;
  }

  res.send(`Suma: ${sum}`);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
