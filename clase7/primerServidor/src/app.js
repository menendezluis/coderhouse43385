import express from "express";

const app = express();
const PORT = 8080;
const usuarios = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("hola mundo");
});
app.get("/api/user/", (req, res) => {
  res.json({ message: "success", data: usuarios });
});

app.post("/api/user/", (req, res) => {
  const { id, name, lastName, email, password } = req.body;

  if (!name || !lastName || !email || !password) {
    return res.status(400).json({ message: "faltan datos" });
  } else {
    let usuario = {
      id: id,
      name: name,
      lastName: lastName,
      email: email,
      password: password,
    };
    let existUser = usuarios.findIndex((user) => user.id === id);
    if (existUser === -1) {
      usuarios.push(usuario);
      res.json({ message: "usuario agregado", data: req.body });
    } else {
      res.status(409).json({ message: "usuario ya existe", data: req.body });
    }
  }
});

app.put("/api/user/:uid", (req, res) => {
  const { uid } = req.params;
  const { id, name, lastName, email, password } = req.body;

  let existUser = usuarios.findIndex((user) => user.id === uid);
  if (existUser === -1) {
    res.status(400).json({ message: "usuario no existe" });
  } else {
    if (!name || !lastName || !email || !password) {
      return res.status(400).json({ message: "faltan datos" });
    } else {
      let user = {
        id,
        name: name,
        lastName: lastName,
        email: email,
        password: password,
      };
      //usuarios[existUser] = user;
      usuarios.splice(existUser, 1, user);
      res.json({ message: "usuario modificado", data: req.body });
    }
  }
});

app.delete("/api/user/:uid", (req, res) => {
  const { uid } = req.params;
  let existUser = usuarios.findIndex((user) => user.id === uid);

  if (existUser === -1) {
    return res
      .status(404)
      .json({ message: "el usuario no existe por favor valide" });
  } else {
    usuarios.splice(existUser, 1);
    //let result  = usuarios.filter((data) => data.id === uid);
    return res.status(200).json({ message: "usuario eliminado exitosamente" });
  }
});

app.listen(PORT, () => {
  console.log("servidor esta running en el puerto" + PORT);
});
