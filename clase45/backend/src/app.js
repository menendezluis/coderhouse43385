import express from "express";
import cors from "cors";
import paymentsRouter from "./routes/payments.routes.js";
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use("/api/payments", paymentsRouter);

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
