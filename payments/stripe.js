const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

async function createCheckout() {
  return await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: { name: "Premium Signals" },
        unit_amount: 1000
      },
      quantity: 1
    }],
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000"
  });
}