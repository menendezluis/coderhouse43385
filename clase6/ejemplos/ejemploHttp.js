import http from "http";

const server = http.createServer((solicitud, respuesta) => {
  respuesta.end("Hola mundo");
});

server.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
//paso1 npm init -y
//paso2 configurar package.json agregar "type": "module",
//paso importar "import http from "http";"
//3000
//4000
//5000
//0-3000
//5000-9999
//80
//8081