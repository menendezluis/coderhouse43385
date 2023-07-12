import express from "express";
import utils from "../src/utils.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const user = {
    name: "Joaquin",
    lastname: "Abadia",
    age: 31,
  };

  res.render("users", user);
});

/*router.get("/", (req, res) => {
  const users = utils.users;
  const role = true;
  const myUser = {
    title: "Este es el titulo",
    users: users,
    role: role,
    style: "style.css",
  };
  console.log("desde el servidor");
  res.render("admin", myUser);
});*/

export default router;
