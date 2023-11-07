import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("https://pokeapi.co/api/v2/");

describe("Testing de pokemon", () => {
  describe("Test de pokemon startyou ", () => {
    it("Test de staryou", async () => {
      const { statusCode, ok, _body } = await requester
        .get("pokemon/120")
        .send();

      // console.log({ statusCode }, { ok }, { _body });
      expect(_body.name).to.be.equal("staryu");
    });
  });
});
