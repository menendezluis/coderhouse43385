import { faker } from "@faker-js/faker";

//faker.locale = "es";

function generateUser() {
  let numOfProducts = parseInt(faker.string.numeric());
  let products = [];

  for (let i = 0; i <= numOfProducts; i++) {
    products.push(generateProduct());
  }

  return {
    name: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    sex: faker.person.sex(),
    birthdate: faker.date.birthdate(),
    phone: faker.phone.number(),
    products,
    image: faker.internet.avatar(),
    id: faker.database.mongodbObjectId(),
    role: faker.datatype.boolean() ? "Admin" : "User",
  };
}

function generateProduct() {
  return {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    deparment: faker.commerce.department(),
    stock: faker.string.numeric(),
    id: faker.database.mongodbObjectId(),
    image: faker.image.url(),
    code: faker.commerce.isbn(),
    description: faker.commerce.productDescription(),
  };
}

export { generateProduct, generateUser };
