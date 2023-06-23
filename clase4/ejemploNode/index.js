import fs from "fs";
const datos = {
  pais: "Argentina",
  continente: "America",
  poblacion: 48000000,
  idioma: "Español",
};

async function promesa() {
  try {
    await fs.promises.writeFile("datosdepais.txt", JSON.stringify(datos));
    let result = await fs.promises.readFile("datosdepais.txt", "utf-8");
    let myObject = await JSON.parse(result);
    console.log(myObject.pais);
  } catch (err) {
    console.log(err);
  }
}
promesa();
