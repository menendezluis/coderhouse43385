import express from "express";
import userRouter from "./routes/users.js";

const app = express();
app.use("/api/user", userRouter);

app.listen(3434, () => {
  console.log("running in port  3434");
});
