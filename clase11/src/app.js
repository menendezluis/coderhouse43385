import express from "express";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import { Server } from "socket.io";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
const httpServer = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const socket = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.static("public"));

app.use("/", viewsRouter);
