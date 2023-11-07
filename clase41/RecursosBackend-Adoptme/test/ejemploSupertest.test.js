import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

const getPetData = async (id) => {
  const { statusCode, ok, _body } = await requester
    .get("/api/pets/" + id)
    .send();
  return _body.payload;
};

//https://pokeapi.co/api/v2/pokemon/ditto
describe("Testing de adoptme", () => {
  describe("Test de mascotas ", () => {
    it("El endpoint POST /api/pets debe crear una mascota correctamente", async () => {
      const petMock = {
        name: "Pelusa",
        specie: "Perro",
        birthDate: "2020-02-02",
      };
      const { statusCode, ok, _body } = await requester
        .post("/api/pets")
        .send(petMock);

      //console.log({ statusCode }, { ok }, { _body });
      expect(_body.payload).to.have.property("_id");
      expect(_body.payload.adopted).to.be.false;
    });
    it("Creamos una mascota sin nombre, el resultado aceptable debe ser error 400", async () => {
      const petMock = {
        specie: "Perro",
        birthDate: "2020-02-02",
      };
      const { statusCode } = await requester.post("/api/pets").send(petMock);

      expect(statusCode).to.be.equal(400);
    });
    it("Obtenemos todas las mascotas, la respuesta debe de tener status y payload ademas payload debe ser un arreglo", async () => {
      const { statusCode, ok, _body } = await requester.get("/api/pets").send();
      const isAnArray = Array.isArray(_body.payload);
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.true;
      expect(_body.payload).to.be.an("array");
      expect(isAnArray).to.be.true;
    });

    it("Modificamos una mascota, y comparamos los valores previos y actuales", async () => {
      const pedId = "6541875c59e09fbad6d394a3";
      const previosPet = await getPetData(pedId);

      const petMock = {
        name: "Colitas",
        specie: "Gato",
        birthDate: "2022-02-02",
      };

      const { ok, statusCode, _body } = await requester
        .put("/api/pets/" + pedId)
        .send(petMock);
      const newPetData = await getPetData(pedId);
      console.log(previosPet.name, newPetData.name);

      expect(previosPet.name).to.be.not.equal(newPetData.name);
    });
  });
});
