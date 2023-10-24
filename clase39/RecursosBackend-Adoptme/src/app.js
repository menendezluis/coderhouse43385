import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";

import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import __dirname from "./utils.js";

const app = express();
const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(
  `mongodb+srv://coderhouse:dfbx134uStiXdaBs@cluster0.pnpufdn.mongodb.net/adoptme_swagger_43385`
);

//SwaggerOptions
const SwaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Documentacion del poder",
      description: "y del saber",
    },
  },
  apis: [`${__dirname}/docs/**/*.yaml`],
};

//conectamos Swagger
const specs = swaggerJsdoc(SwaggerOptions);

//Rutas express
app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
