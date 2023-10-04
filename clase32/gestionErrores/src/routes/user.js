import { Router } from "express";
import CustomError from "../services/CustomError.js";
import EErrors from "../services/enum.js";
import { generateUserErrorInfo } from "../services/info.js";

const users = [];
const router = Router();

router.get("/", (req, res) => {
  res.json({
    count: users.length,
    payload: users,
  });
});

router.post("/", (req, res) => {
  const { first_name, last_name, age, email } = req.body;
  if (!first_name || !last_name || !email) {
    CustomError.createError({
      name: "Error creando usuario",
      cause: generateUserErrorInfo({
        first_name,
        last_name,
        age,
        email,
      }),
      message: "Error trying to create a user",
      code: EErrors.INVALID_TYPES_ERROR,
    });
  }
  const user = {
    first_name,
    last_name,
    age,
    email,
  };
  user.id = users.length ? users[users.length - 1].id + 1 : 1;

  users.push(user);

  res.json({
    status: "success",
    payload: user,
  });
});

export default router;
