import { Router } from "express";
import Users from "../dao/dbManagers/users.js";
import Courses from "../dao/dbManagers/courses.js";
import { authorization, passportCall } from "../utils.js";

const usersManager = new Users();
const coursesManager = new Courses();

const router = Router();

router.get("/", async (req, res) => {
  let users = await usersManager.getAll();
  console.log(users);
  res.render("login", {});
});

router.get("/courses", async (req, res) => {
  let courses = await coursesManager.getAll();
  console.log(courses);
  res.render("courses", { courses });
});

router.get("/signup", async (req, res) => {
  let users = await usersManager.getAll();
  console.log(users);
  res.render("signup", {});
});
router.get(
  "/privado",
  passportCall("jwt"),
  authorization("user"),
  (req, res) => {
    console.log("calling privado", req.user);

    res.render("topsecret", {});
  }
);
export default router;
