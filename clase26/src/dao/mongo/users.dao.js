import Users from "./models/users.js";

export default class UsersDao {
  constructor() {}

  async getAll() {
    try {
      const users = await Users.find();
      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async save(newElement) {
    try {
      const response = await Users.create(newElement);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
