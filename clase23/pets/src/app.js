import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import petRoute from "./routes/pets.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3131;
const MONGO_URL =
  process.env.MONGO_URL ||
  "mongodb+srv://coderhouse:dfbx134uStiXdaBs@cluster0.pnpufdn.mongodb.net/pets-43385";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/pets", petRoute);

app.get("*", (req, res) => {
  res.status(404).send({ error: "Not found" });
});

app.listen(3131, () => {
  console.log("Server started");
});

const environment = async () => {
  try {
    console.log(MONGO_URL);
    await mongoose.connect(MONGO_URL);
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};

environment();
