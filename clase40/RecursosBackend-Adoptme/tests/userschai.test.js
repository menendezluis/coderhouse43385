import chai from "chai";
import mongoose from "mongoose";
import User from "../src/dao/Users.dao.js";
import userModel from "../src/dao/models/User.js";
import { createHash, passwordValidation } from "../src/utils/index.js";
import UserDTO from "../src/dto/User.dto.js";

mongoose.connect(
  `mongodb+srv://coderhouse:dfbx134uStiXdaBs@cluster0.pnpufdn.mongodb.net/adoptme_swagger_43385`
);

const expect = chai.expect;
let contrasenaTest = "1234";
let saveHash = "";

describe("Este conjunto de pruebas evaluara nuestros datos", () => {
  before(function () {});
  beforeEach(function () {
    this.timeout(5000);
  });

  it("Validar hasheo de password", async () => {
    const hash = await createHash(contrasenaTest);
    const result = contrasenaTest === hash;
    saveHash = hash;
    expect(result).to.be.false;
  });
  it("Validar password", async () => {
    const result = await passwordValidation(
      { username: "blabla", password: saveHash },
      contrasenaTest
    );
    expect(result).to.be.true;
  });
  it("Alteramos el hash", async () => {
    const result = await passwordValidation(
      { username: "blabla", password: saveHash },
      "12345"
    );
    expect(result).to.be.false;
  });
  it("Evaluar DTO que unifique nombre y apellido en un solo campo", async () => {
    const user = {
      first_name: "Luis",
      last_name: "Perez",
      role: "admin",
      email: "perezluis@gmail.com",
    };
    const userDTO = UserDTO.getUserTokenFrom(user);
    expect(userDTO).to.be.an("object").and.to.have.property("name");
    expect(userDTO.name).to.be.equal("Luis Perez");
  });
  it("El DTO no debe tener el campo password, first_name, last_name", async () => {
    const user = {
      first_name: "Luis",
      last_name: "Perez",
      role: "admin",
      email: "perezluis@gmail.com",
    };
    const userDTO = new UserDTO(user);
    expect(userDTO).to.be.an("object").and.to.not.have.property("first_name");
    expect(userDTO).to.be.an("object").and.to.not.have.property("last_name");
    expect(userDTO).to.be.an("object").and.to.not.have.property("password");
  });
});
