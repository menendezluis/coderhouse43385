const fs = require("fs");
const crypto = require("crypto");

let secret = "coderhouse, secret";

class UserManager {
  constructor() {
    this.users = [];
  }

  async createUser(name, lastName, username, password) {
    const user = {
      id: this.users.length + 1,
      name,
      lastName,
      username,
      password: crypto
        .createHmac("sha256", secret)
        .update(password)
        .digest("hex"),
    };

    if (
      name === undefined ||
      lastName === undefined ||
      username === undefined ||
      password === undefined
    ) {
      return console.log("Todos los campos son obligatorios");
    }

    let condition = this.users.find((user) => user.username === username);
    if (condition) {
      return console.log("El usuario ya existe");
    }

    this.users.push(user);
    await this.saveUsersToFile();
  }

  async getUsers() {
    await this.loadUsersFromFile();
    return this.users;
  }

  async validateUser(username, password) {
    await this.loadUsersFromFile();
    let myPassword = crypto
      .createHmac("sha256", secret)
      .update(password)
      .digest("hex");
    let isUserInDatabase = this.users.findIndex(
      (dato) => dato.username === username
    );

    if (isUserInDatabase === -1) {
      console.log("Por favor verifique, algo ha pasado!!");
    } else {
      let user = this.users[isUserInDatabase];
      if (user.password === myPassword) {
        console.log("Bienvenido " + user.name + " " + user.lastName);
      } else {
        console.log("La contraseña es incorrecta");
      }
    }
  }

  async saveUsersToFile() {
    try {
      await fs.promises.writeFile("users.json", JSON.stringify(this.users));
      console.log("Usuarios guardados en el archivo.");
    } catch (error) {
      console.error("Error al guardar los usuarios en el archivo:", error);
    }
  }

  async loadUsersFromFile() {
    try {
      const data = await fs.promises.readFile("users.json");
      this.users = JSON.parse(data.toString());
    } catch (error) {
      console.error("Error al cargar los usuarios desde el archivo:", error);
    }
  }
}

let coderhouseUsers = new UserManager();

(async () => {
  await coderhouseUsers.createUser("luis", "menendez", "lmenendez", "123456");
  await coderhouseUsers.createUser("bruno", "lezcano", "blezcnao", "123456");

  //console.log(await coderhouseUsers.getUsers());
  await coderhouseUsers.validateUser("lmenendez", "1234567");
})();
