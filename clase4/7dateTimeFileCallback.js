const fs = require("fs");
//const dateTime = require("date-time");

const date = new Date();

fs.writeFile("date.txt", date.toISOString(), (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Archivo creado");
  fs.readFile("date.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
});
