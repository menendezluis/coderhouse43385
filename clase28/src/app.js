import express from "express";
import mongoose from "mongoose";
import contactRouter from "./routes/contact.routes.js";

const PORT = process.env.PORT | 8080;
const app = express();

app.use(express.json());

app.get("/helloworld", (req, res) => {
  res.send("hola mundo");
});

app.use("/contacts", contactRouter);

app.listen(PORT, () => {
  console.log(`Aplicacion iniciada en puerto ${PORT}`);
});

mongoose.connect(
  "mongodb+srv://coderhouse:dfbx134uStiXdaBs@cluster0.pnpufdn.mongodb.net/contactos"
);
