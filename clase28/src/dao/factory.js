import config from "../config/config.js";
//import ContactsMongoDao from "./mongo/contact.mongo.js"
//import ContactsMemoryDao from "./mongo/contact.memory.js"

export let Contact;

switch (config.persistence) {
  case "MONGO":
    const { default: ContactMongo } = await import("./mongo/contact.mongo.js");
    Contact = ContactMongo;
    break;
  case "MEMORY":
    const { default: ContactMemory } = await import(
      "./memory/contact.memory.js"
    );
    Contact = ContactMemory;
    break;
}

export default Contact;
