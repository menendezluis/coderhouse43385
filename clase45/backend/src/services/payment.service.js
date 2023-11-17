import Stripe from "stripe";

export default class PaymentService {
  constructor() {
    this.stripe = new Stripe("aqui su llave privada");
  }

  createPaymentIntent = async (data) => {
    const paymentIntent = await this.stripe.paymentIntents.create(data);
    return paymentIntent;
  };
}
