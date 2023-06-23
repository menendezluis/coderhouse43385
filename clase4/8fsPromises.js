const fs = require("fs");

const date = new Date();

fs.promises
  .writeFile("then.txt", date.toISOString() + "Usando then")
  .then(() => {
    console.log("Archivo creado");
  })
  .catch((err) => console.log(err));
fs.promises
  .readFile("then.txt", "utf-8")
  .then((dato) => console.log(dato))
  .catch((err) => console.log(err));

async function promesa() {
  try {
    await fs.promises.writeFile(
      "date.txt",
      date.toISOString() + "Usando asyn/await"
    );
    let result = await fs.promises.readFile("date.txt", "utf-8");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
const promesaFlecha = async () => {
  try {
    await fs.promises.writeFile(
      "date.txt",
      date.toISOString() + "Usando asyn/await"
    );
    let result = await fs.promises.readFile("date.txt", "utf-8");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
promesa();
