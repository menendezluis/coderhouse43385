import { Router } from "express";

const router = Router();

const users = [];
createUsers();
router.post("/", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);
  if (!user)
    return res.status(401).json({ respuesta: "Usuario no encontrado" });
  if (user.password !== password)
    return res.status(401).json({ respuesta: "Contraseña incorrecta" });

  res.status(200).json({ respuesta: "ok" });
});

export default router;

function createUsers() {
  users.push({
    username: "pepe",
    password: "pepepass",
  });

  users.push({
    username: "juan",
    password: "juanpass",
  });

  users.push({
    username: "jose",
    password: "josepass",
  });

  users.push({
    username: "luis",
    password: "luispass",
  });
}
