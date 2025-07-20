import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();
app.use(express.static("public"));
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  const line_items = cart.map(item => (
    {
      price_data: {
        currency: 'usd',
        product_data: { name: item.name },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    }
  ));

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
    console.log(`listening on port ${PORT}\n http://localhost:${PORT}`);
});