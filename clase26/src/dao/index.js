import memoryToyDao from "./memory/toys.dao.js";
import mongoToyDao from "./mongo/toys.dao.js";
import memoryUserDao from "./memory/users.dao.js";
import mongoUserDao from "./mongo/users.dao.js";
import { PERSISTENCE } from "../config/config.js";

export const TOYSDAO =
  PERSISTENCE === "MONGO" ? new mongoToyDao() : new memoryToyDao();
export const USERSDAO =
  PERSISTENCE === "MONGO" ? new mongoUserDao() : new memoryUserDao();
