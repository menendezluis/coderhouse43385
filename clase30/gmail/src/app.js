import express from "express";
import nodemailer from "nodemailer";
import { __dirname } from "./utils.js";

const app = express();

const PORT = 8080;

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "lmenendez.1@gmail.com",
    pass: "xxxx xxxx xxxx xxxx",
  },
});

app.get("/mail", async (req, res) => {
  let result = await transporter.sendMail({
    from: "Coder house 43385<lmenendez.1@gmail.com>",
    to: "luismenendez.dev@gmail.com",
    subject: "Correo 3",
    text: "Hola, esto es una prueba de envio de correo",
    html: `<div><h1>Hola, esto es una prueba de envio de correo</h1>
    <img src="cid:dog2" /></div>`,
    attachments: [
      {
        filename: "dog2.webp",
        path: __dirname + "/dog2.webp",
        cid: "dog2",
      },
    ],
  });

  res.send("Correo enviado");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
