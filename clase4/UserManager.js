const fs = require("fs");

class UserManager {
  usuarios = [];
  constructor(path) {
    this.path = path;
    this.cargarElArchivo();
  }

  agregarUsuario(usuario) {
    this.guardarEnArchivo(usuario);
  }

  async guardarEnArchivo(usuario) {
    try {
      let datosPrevios = await fs.promises.readFile(this.path, "utf-8");
      let datos = await JSON.parse(datosPrevios);
      if (datos.length === 0) {
        this.usuarios.push(usuario);

        await fs.promises.writeFile(this.path, JSON.stringify(this.usuarios));
      } else {
        this.usuarios = datos;
        this.usuarios.push(usuario);
        await fs.promises.unlink(this.path);
        await fs.promises.writeFile(this.path, JSON.stringify(this.usuarios));
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async cargarElArchivo() {
    try {
      let result = await fs.promises.readFile(this.path, "utf-8");
      let data = await JSON.parse(result);
      this.usuarios = data;
      console.log(this.usuarios);
    } catch (err) {
      throw new Error(err);
    }
  }
}

let userManager = new UserManager("./usuarios.json");
userManager.agregarUsuario({
  nombre: "Yanina ",
  apellido: "Glaser",
});
userManager.agregarUsuario({
  nombre: "Daniel",
  apellido: "Perco",
});
userManager.agregarUsuario({
  nombre: "Jhoceliz",
  apellido: "Figueroa Pinto",
});
userManager.cargarElArchivo();
