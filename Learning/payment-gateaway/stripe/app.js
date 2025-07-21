import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';

const app = express();
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"));

app.post('/webhook', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const STRIPE_WEBHOOK_KEY = process.env.STRIPE_WEBHOOK_KEY;
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_KEY);
  } catch (e) {
    console.error('❌ Webhook signature verification failed.', e.message);
    return res.sendStatus(400);
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      console.log("💰 Payment was successful!", session);
      break;

    case "checkout.session.async_payment_failed":
      const failedSession = event.data.object;
      console.log("❌ Payment failed.", failedSession);
      break;

    default:
      console.log(`⚠️ Unhandled event type ${event.type}`);
  }

  res.status(200).send();
});

app.use(express.json());

app.get('/checkout', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'checkout.html'));
});

app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'success.html'));
});

app.get('/cancel', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cancel.html'));
});

app.post('/create-checkout-session', async (req, res) => {
  const cart = req.body.cart || [];
  const line_items = cart.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: { name: item.name },
      unit_amount: item.price,
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `http://localhost:${PORT}/success`,
      cancel_url: `http://localhost:${PORT}/cancel`,
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
