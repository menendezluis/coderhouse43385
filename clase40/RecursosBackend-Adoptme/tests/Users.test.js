import mongoose from "mongoose";
import User from "../src/dao/Users.dao.js";
import userModel from "../src/dao/models/User.js";
import Assert from "assert";

const assert = Assert.strict;

//haremos nuestra primera prueba
mongoose.connect(
  `mongodb+srv://coderhouse:dfbx134uStiXdaBs@cluster0.pnpufdn.mongodb.net/adoptme_swagger_43385`
);
describe("Este conjunto de pruebas evalua algo", () => {
  it("Obtener los usuarios de la base de datos", async () => {
    const users = await userModel.find();
    //console.log(users);
    assert.strictEqual(Array.isArray(users), true);
  });

  it("Debe ser capaz de crear un usuario en base de datos", async () => {
    const user = {
      first_name: "Luis",
      last_name: "Perez",
      email: "luisperez@gmail.com",
      password: "1234",
    };
    const users = new User();
    const result = await users.save(user);
    //console.log(result);

    assert.notEqual(result, null);
  });

  it("Obtener un usuario", async () => {
    let email = "luisperez@gmail.com";
    const users = new User();
    const result = await users.getBy({ email: email });
    assert.notEqual(result, null);
  });
});

/*first_name:{
        type: String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
*/
