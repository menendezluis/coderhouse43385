import Toy from "./models/toys.js";
export default class ToysDao {
  constructor() {}

  async getAll() {
    try {
      const toys = await Toy.find();
      return toys;
    } catch (error) {
      console.log(error);
    }
  }

  async save(newElement) {
    try {
      const response = await Toy.create(newElement);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
