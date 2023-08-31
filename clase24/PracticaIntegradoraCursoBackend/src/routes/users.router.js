import { Router } from "express";
import Users from "../dao/dbManagers/users.js";
import Courses from "../dao/dbManagers/courses.js";

const usersManager = new Users();
const coursesManager = new Courses();
const router = Router();

router.get("/", async (req, res) => {
  let users = await usersManager.getAll();
  if (!users)
    return res.status(500).send({
      status: "error",
      error: "Couldn't get users due to internal error",
    });
  res.send({ status: "success", payload: users });
});

router.get("/:id", async (req, res) => {
  let user = await usersManager.getBy({ _id: req.params.id });
  if (!user)
    return res.status(404).send({ status: "error", error: "User not found" });
  res.send({ status: "success", payload: user });
});

router.post("/", async (req, res) => {
  let { first_name, last_name, dni, email, birthDate, gender, password } =
    req.body;
  if (!first_name || !last_name || !dni || !email || !birthDate)
    return res
      .status(400)
      .send({ status: "error", error: "Incomplete values" });
  let result = await usersManager.saveUser({
    first_name,
    last_name,
    email,
    dni,
    birthDate,
    gender,
    password,
  });
  if (!result)
    return res.status(500).send({ status: "success", payload: result });
  res.send({ status: "success", payload: result });
});

router.post("/:uid/courses/:cid", async (req, res) => {
  const { uid, cid } = req.params;
  const course = await coursesManager.getById(cid);
  if (!course)
    return res.status(404).send({ status: "error", error: "Course not found" });
  const user = await usersManager.getBy({ _id: uid });
  if (!user)
    return res.status(404).send({ status: "error", error: "User not found" });
  //checamos si el usuario ya tenía ese curso registrado
  let courseExists = user.courses.some((c) => c._id.toString() === cid);
  if (courseExists)
    return res.status(400).send({
      status: "error",
      error: "The user is already registered in this course",
    });
  //Si todo está bien, insertamos de ambos lados.
  user.courses.push(course._id);
  course.students.push(user._id);
  await usersManager.updateUser(uid, user);
  await coursesManager.updateCourse(cid, course);
  res.send({ status: "success", message: "User added to course" });
});

export default router;
