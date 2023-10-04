import { Router } from "express";
import { generateUser } from "../utils.js";

const router = Router();

router.get("/", (req, res) => {
  let users = [];
  for (let x = 0; x <= 100; x++) {
    users.push(generateUser());
  }
  res.json({
    count: users.length,
    data: users,
  });
});
export default router;
