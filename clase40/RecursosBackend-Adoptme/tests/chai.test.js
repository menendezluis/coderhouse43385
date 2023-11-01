import chai from "chai";
import mongoose from "mongoose";
import User from "../src/dao/Users.dao.js";
import userModel from "../src/dao/models/User.js";

mongoose.connect(
  `mongodb+srv://coderhouse:dfbx134uStiXdaBs@cluster0.pnpufdn.mongodb.net/adoptme_swagger_43385`
);

const expect = chai.expect;

describe("Este conjunto de pruebas evaluara nuestros datos", () => {
  before(function () {});
  beforeEach(function () {
    this.timeout(5000);
  });
  it("la suma de 2 + 2 debe ser 4", () => {
    expect(2 + 2)
      .to.be.equal(4)
      .and.to.be.a("number");
  });
  it("Obtener los usuarios de la base de datos", async () => {
    const result = await userModel.find();
    expect(result).to.be.an("array");
    //expect(Array.isArray(result)).to.be.true;
    //expect(Array.isArray(result)).to.be.ok;
    //expect(Array.isArray(result)).to.be.equal(true);
  });
  it("Borrar el usuario creado", async () => {
    const users = new User();
    const filteredUser = await users.getBy({ email: "pluis@gmail.com" });
    const result = await users.delete(filteredUser._id);
    expect(result).to.be.ok;
  });
  it("crear un usuario en base de datos", async () => {
    const user = {
      first_name: "Luis",
      last_name: "Perez",
      email: "pluis@gmail.com",
      password: "1234",
    };
    const users = new User();
    const result = await users.save(user);
    //expect(result).to.be.ok;
    expect(result).to.be.an("object").and.to.have.property("_id");
  });
  it("Obtener el usuario creado", async () => {
    const users = new User();
    const result = await users.getBy({ email: "pluis@gmail.com" });
    expect(result).to.be.an("object").and.to.have.property("_id");
  });
});
