import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { userModel } from "../dao/models/users.js";
import { generateToken } from "../utils.js";

const router = Router();

router.post(
  "/register",
  passport.authenticate("register", {
    passReqToCallback: true,
    session: false,
    failureRedirect: "api/sessions/failedRegister",
    failureMessage: true,
  }),
  (req, res) => {
    res.send({
      status: "success",
      message: "User registered",
      payload: req.user._id,
    });
  }
);
router.get("/failedRegister", (req, res) => {
  res.send("failed Register");
});

/*router.post(
  "/login",
  passport.authenticate("login", {
    failureRedirect: "/api/sessions/failLogin",
  }),
  async (req, res) => {
    console.log(req.user);
    if (!req.user) {
      return res.status(401).json("error de autenticacion");
    }
    req.session.user = {
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      age: req.user.age,
    };
    req.session.admin = true;

    res.send({ status: "success", mesage: "user logged", user: req.user });
  }
);
*/
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      message: "error",
      data: "Faltan campos",
    });
  }
  let result = await userModel.find({
    email: username,
  });
  //console.log("aaaaaaaaa", result);
  if (result) {
    const role = "admin";
    const myToken = generateToken({ username, password, role });
    /* res.status(200).json({
        message: "success",
        token: myToken,
      });
       } else {
      res.status(400).json({
        message: "error",
        data: "Credenciales invalidas",
      });
    }*/
    res
      .cookie("CoderKeyQueNadieDebeSaber", myToken, {
        maxAge: 60 * 60 * 1000,
      })
      .send({ message: "Loggeg in!" });
  } else {
    res.status(401).json({
      message: "error",
      data: "Usuario o contraseña incorrectos",
    });
  }
});

router.get("/failedLogin", (req, res) => {
  console.log(req.message);
  res.send("failed Login");
});

export default router;
