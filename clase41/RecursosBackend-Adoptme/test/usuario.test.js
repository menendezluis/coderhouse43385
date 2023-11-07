import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

let temporaEmail = "";

describe("Testing de usuario", () => {
  let cookie;
  describe("Test de usuario", () => {
    it("El endpoint DELETE /api/users debe borrar un usuario correctamente", async () => {
      const { statusCode, ok, _body } = await requester
        .delete("/api/users/" + "654190f675b7cff57d43ba03")
        .send();

      expect(ok).to.be.true;
    });

    it("Se debe registrar un usuario  en api/sessions/register", async () => {
      let randomNumber = Math.random() * 1000;
      temporaEmail = `luis.perez${randomNumber}@gmail.com`;
      const userMock = {
        first_name: "Luis",
        last_name: "Perez",
        email: temporaEmail,
        password: "1234",
      };
      const { statusCode, ok, _body } = await requester
        .post("/api/sessions/register/")
        .send(userMock);
      // idUser = _body.payload._id;
      console.log(_body.payload);
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.true;
      expect(_body.status).to.be.equal("success");
    });
    it("Haremos login", async () => {
      const mockUser = {
        email: temporaEmail,
        password: "1234",
      };

      const result = await requester.post("/api/sessions/login").send(mockUser);
      const cookieResult = result.headers["set-cookie"][0];

      expect(cookieResult).to.be.ok;

      cookie = {
        name: cookieResult.split("=")[0],
        value: cookieResult.split("=")[1],
      };
      expect(cookie.name).to.be.equal("coderCookie");
      expect(cookie.value).to.be.ok;
    });
    it("Accedemos al endpoint de current con la cookie", async () => {
      const { _body } = await requester
        .get("/api/sessions/current")
        .set("Cookie", [`${cookie.name}=${cookie.value}`])
        .send();
      expect(_body.payload.email).to.be.equal(temporaEmail);
    });
  });
});
