import express from "express";
import mongoose from "mongoose";
import toysRouter from "./routes/toys.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

app.use(express.json());

app.use("/toys", toysRouter);
app.use("/users", userRouter);

app.listen(8080, () => {
  console.log("Server started");
});
mongoose.connect(
  "mongodb+srv://coderhouse:dfbx134uStiXdaBs@cluster0.pnpufdn.mongodb.net/ejemplocapas"
);
