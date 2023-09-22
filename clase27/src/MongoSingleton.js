import mongoose from "mongoose";

export default class MongoSingleton {
  static #instance;

  constructor() {
    mongoose.connect(
      "mongodb+srv://coderhouse:dfbx134uStiXdaBs@cluster0.pnpufdn.mongodb.net/ejemplocapas"
    );
  }

  static getInstance() {
    if (this.#instance) {
      console.log("La conexion ya existe");

      return this.#instance;
    }
    console.log("La conexion no existe");
    this.#instance = new MongoSingleton();
    return this.#instance;
  }
}
