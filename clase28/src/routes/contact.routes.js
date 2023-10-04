import { Router } from "express";
//import ContactDTO from "../dao/DTO/contact.js";
import Contacts from "../dao/factory.js";
import ContactRepository from "../repository/Contacts.repository.js";

const router = Router();
const contacts = new Contacts();
const contactRepository = new ContactRepository(contacts);

router.get("/", async (req, res) => {
  //let result = await contacts.get();
    const data = await contactRepository.getContacts();
  res.send({ status: "ok", payload: result });
});

router.post("/", async (req, res) => {
  const { name, lastname, phone } = req.body;
  let contact = new ContactDTO({
    name,
    lastname,
    phone,
  });
  let result = await contacts.create(contact);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const { name, phone } = req.body;
  let contact = { name, phone };
  const { id } = req.params;
  let result = await contacts.modify(id, contact);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  let result = await contacts.delete(id);
  res.json(result);
});
export default router;
