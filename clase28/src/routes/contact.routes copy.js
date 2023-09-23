import { Router } from "express";
import ContactDTO from "../dao/DTO/contact.js";
import Contacts from "../dao/factory.js";
import ContactRepository from "../repository/Contacts.repository.js";

const router = Router();
const contacts = new Contacts();
const contactRepository = new ContactRepository(contacts);

router.get("/", async (req, res) => {
  const data = await contactRepository.getContacts();
  res.send({ status: "ok", payload: data });
});

router.post("/", async (req, res) => {
  const { name, lastname, phone } = req.body;
  const data = await contactRepository.createContact({
    name,
    lastname,
    phone,
  });
  res.json(data);
});

router.put("/:id", async (req, res) => {
  const data = await contactRepository.modifyContact(req.params.id, req.body);
});

router.delete("/:id", async (req, res) => {
  const data = await contactRepository.deleteContact(req.params.id);

  res.json(data);
});
export default router;
