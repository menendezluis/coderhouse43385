const fs = require("fs");

fs.readFile("archivo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
  fs.writeFile("archivo.txt", "Hola coders, estoy en un archivo", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Archivo creado");
    fs.readFile("archivo.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
      fs.appendFile("archivo.txt", " mas contenido", (err) => {
        if (err) {
          console.log(err);
        }
        console.log("Archivo actualizado");
        fs.readFile("archivo.txt", "utf-8", (err, data) => {
          if (err) {
            console.log(err);
          }
          console.log(data);
          fs.unlink("archivo.txt", (err) => {
            if (err) {
              console.log(err);
            }
            console.log("Archivo borrado");
          });
        });
      });
    });
  });
});
