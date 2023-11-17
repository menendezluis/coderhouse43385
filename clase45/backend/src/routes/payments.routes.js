import { Router } from "express";
import PaymentService from "../services/payment.service.js";
const router = Router();

const products = [
  { id: 1, name: "papas", price: 1000 },
  { id: 2, name: "queso", price: 500 },
  { id: 3, name: "hamburguesas", price: 1500 },
  { id: 4, name: "soda", price: 1000 },
  { id: 5, name: "golosinas", price: 800 },
];

router.post("/payment-intents", async (req, res) => {
  const productRequested = products.find(
    (product) => product.id === parseInt(req.query.id)
  );
  if (!productRequested)
    return res.status(404).json({ message: "product not found" });

  const paymentIntentInfo = {
    amount: productRequested.price,
    currency: "usd",
    description: productRequested.name,
    payment_method_types: ["card"],
    metadata: {
      name: productRequested.name,
      useId: "este seria un correlativo de mongo",
      orderDetails: JSON.stringify({
        product: productRequested.name,
        price: productRequested.price,
        quantity: 23,
      }),
      address: JSON.stringify({
        street: "calle falsa 123",
        city: "Springfield",
        state: "Springfield",
        postal_code: "12345",
        country: "US",
      }),

      amount: productRequested.price,
    },
  };

  const service = new PaymentService();
  let result = await service.createPaymentIntent(paymentIntentInfo);
  console.log(result);
  res.send({ status: "success", payload: result });
});

export default router;
