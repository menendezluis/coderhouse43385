import passport from "passport";
import local from "passport-local";
import Users from "../dao/dbManagers/users.js";
import { createHash, isValidPassword } from "../utils.js";
import jwt, { ExtractJwt } from "passport-jwt";
import { userModel } from "../dao/models/users.js";

const LocalStrategy = local.Strategy;
const JWTStragegy = jwt.Strategy;

const userService = new Users();

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["CoderKeyQueNadieDebeSaber"];
  }
  return token;
};

//en la db
const initializePassport = async () => {
  passport.use(
    "jwt",
    new JWTStragegy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: "CoderKeyQueNadieDebeSaber",
      },
      async (jwt_payload, done) => {
        try {
          //validar que el usuario exista en la base de datos
          console.log("jwt_payload", jwt_payload);
          let response = await userModel.findOne({
            email: jwt_payload.user.username,
          });
          if (!response) {
            return done(null, false, { message: "User not found" });
          } else {
            return done(null, jwt_payload);
          }
        } catch (error) {
          done(error);
        }
      }
    )
  );

  passport.use(
    "register",
    new LocalStrategy(
      { passReqToCallback: true, usernameField: "email", session: false },
      async (req, email, password, done) => {
        try {
          const { first_name, last_name, birthDate, dni, gender } = req.body;
          if (!first_name || !last_name || !password || !birthDate || !dni)
            return done(null, false, { message: "Incomplete values" });
          //¿El usuario ya está en la base de datos?
          const exists = await userService.getBy({ email: email });
          if (exists)
            return done(null, false, { message: "User already exists" });
          const hashedPassword = await createHash(password);
          //Insertamos en la base
          const newUser = {
            first_name,
            last_name,
            email,
            birthDate,
            gender,
            dni,
            password: hashedPassword,
          };
          let result = await userService.saveUser(newUser);
          //SI TODO SALIÓ BIEN EN LA ESTRATEGIA
          return done(null, result);
        } catch (error) {
          done(error);
        }
      }
    )
  );

  passport.use(
    "login",
    new LocalStrategy(async (req, username, password, done) => {
      try {
        const user = await userService.findOne({ email: username });
        if (!user) {
          return done(null, false, { message: "User not found" });
        }
        console.log("user", user);
        if (!isValidPassword(user.password, password)) {
          return done(null, false, { message: "Wrong password" });
        } else {
          return done(null, user);
        }
      } catch (error) {
        console.log("aqui fallo");
        return done("Error al obtener el usuario", error);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    let result = await userService.findOne({ _id: id });
    return done(null, result);
  });
};

export default initializePassport;
