import contactModel from "./models/contact.js";

export default class Contacts {
  constructor() {}
  get = async () => {
    let contacts = await contactModel.find();
    return contacts;
  };
  create = async (contacto) => {
    let result = await contactModel.create(contacto);
    return contacto;
  };
  modify = async (id, contacto) => {
    return await contactModel.findByIdAndUpdate(id, contacto, { new: true });
  };
  delete = async (id) => {
    return await contactModel.findByIdAndDelete(id);
  };
}
