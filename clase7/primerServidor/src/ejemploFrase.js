import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let frase = "Hola desde coderhouse";
let palabras = [
  "Hola",
  "desde",
  "coderhouse",
  "Bienvenidos",
  "a",
  "la",
  "clase",
  "de",
  "backend",
];
app.get("/api/frase", (req, res) => {
  res.send(frase);
});

app.get("/api/palabras/:palabra", (req, res) => {
  const palabra = req.params.palabra;
  console.log("hola chicosque tal estamos levantados con nodemon");
  //const index = frase.indexOf(palabra);
  const result = palabras.findIndex(
    (dato) => dato.toUpperCase() === palabra.toUpperCase()
  );

  if (result === -1) {
    res.status(404).send("Palabra no encontrada");
  }
  res.send({
    status: "ok",
    message: "Palabra encontrada",
    palabra: palabra,
  });
});

app.post("/api/palabras", (req, res) => {
  const palabra = req.body.palabra;
  frase = frase + " " + palabra;
  res.send({
    status: "ok",
    message: "Palabra agregada",
  });
});

app.put("/api/palabras/:palabra", (req, res) => {
  const palabra = req.params.palabra;
  const palabraOld = req.body.palabraOld;
  const palabraNew = req.body.palabraNew;
  const index = frase.indexOf(palabra);
  if (index === -1) {
    res.status(404).send("Palabra no encontrada");
  }
  frase = frase.replace(palabraOld, palabraNew);
  res.send({
    status: "ok",
    message: "Palabra actualizada",
  });
});

app.delete("/api/palabras/:palabra", (req, res) => {
  const palabra = req.params.palabra;
  const index = frase.indexOf(palabra);
  if (index === -1) {
    res.status(404).send("Palabra no encontrada");
  }
  frase = frase.replace(palabra, "");
  res.send({
    status: "ok",
    message: "Palabra eliminada",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
