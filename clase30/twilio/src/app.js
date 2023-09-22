import express from "express";
import twilio from "twilio";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const TWILIO_ACCOUNT_SID = "xxxxx";
const TWILIO_AUTH_TOKEN = "xxxxx";
const TWILIO_PHONE_NUMBER = "+99999999";

const client = twilio(
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER
);

app.get("/sms", async (req, res) => {
  let result = await client.messages.create({
    from: TWILIO_PHONE_NUMBER,
    to: "+123456789",
    body: "Hola clase 43385, aprendemos twilio",
  });

  res.send("SMS sent");
});

app.post("/thankyousms", async (req, res) => {
  const { nombre, producto } = req.body;

  let result = await client.messages.create({
    from: TWILIO_PHONE_NUMBER,
    to: "+123456789",
    body: `Hola ${nombre}, te informamos que tu producto: ${producto} esta en camino`,
  });

  res.send("mensaje enviado");
});

app.listen(8080, () => {
  console.log(`Servidor escuchando en http://localhost:8080`);
});
