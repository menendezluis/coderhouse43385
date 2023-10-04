import express from "express";
import userRoute from "./routes/user.js";
import errorHandler from "./middleware/errors/index.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
