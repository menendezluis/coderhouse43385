const fs = require("fs");
//const dateTime = require("date-time");

const date = new Date();
console.log(date);

fs.writeFileSync("date.txt", date.toISOString());

if (fs.existsSync("date.txt")) {
  let contenido = fs.readFileSync("date.txt", "utf-8");
  console.log(contenido);
}

//fs.unlinkSync("date.txt");
