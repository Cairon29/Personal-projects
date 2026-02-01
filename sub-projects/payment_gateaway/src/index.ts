import type { Request, Response } from "express";
import express from "express";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const DIVISA = process.env.DIVISA || 'USD'
const BOLD_PAYMENT_BUTTON_API_KEY = process.env.BOLD_PAYMENT_BUTTON_API_KEY
const BOLD_PAYMENT_ONLINE_API_KEY = process.env.BOLD_PAYMENT_ONLINE_API_KEY
const API_URL = process.env.API_URL || "https://integrations.api.bold.co"

app.use(express.json());
app.use(express.static(path.join(__dirname, "app")));

app.get("/api", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.post('/checkout_bold_api_web', async (req: Request, res: Response) => {
    console.log(req.body);
    const { plan, price } = req.body
    console.log(plan, price);

    const data = await fetch(`${API_URL}/v1/payment-intent`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": BOLD_PAYMENT_ONLINE_API_KEY ?? "",
        },
        body: JSON.stringify(
            {

                // BASIC PAYMENT INTENT
                "reference_id": "ORD-123456",
                "amount": {
                    "currency": "USD",
                    "total_amount": 100000,
                    "tip_amount": 10000,
                    "taxes": [
                        {
                            "type": "VAT",
                            "base": 5000,
                            "value": 500
                        }
                    ]
                },
                "description": "Compra de testeo increible",
                "callback_url": "https://mi-tienda.com/confirmacion-pago", //Requerido para los métodos de pagos PSE y Bancolombia.
                "metadata": {
                    "key": "promo_code",
                    "value": "DESCUENTO10_2023"
                },
                "customer": {
                    "name": "Juan Pérez",
                    "phone": "3001234567",
                    "email": "juan.perez@example.com",
                    "billing_address": {
                        "street1": "Calle 123 #45-67",
                        "street2": "Apto 202",
                        "city": "Bogotá",
                        "postal_code": "110111",
                        "province": "Cundinamarca",
                        "country_code": "CO",
                        "phone": "3001234567"
                    },
                    "shipping_address": {
                        "street1": "Carrera 98 #34-56",
                        "street2": "Casa 5",
                        "city": "Medellín",
                        "postal_code": "050001",
                        "province": "Antioquia",
                        "country_code": "CO",
                        "phone": "3012345678"
                    },
                    "payment_method": {
                        "name": "CREDIT_CARD",
                        "card_holder_name": "John Doe",
                        "expiration_month": "12",
                        "expiration_year": "2026",
                        "installments": 1,
                        "card_number": "4111111111111111",
                        "cvc": "123"
                    }
                }
            })
    })

    const response = await data.json()
    console.log(response)
    res.send(response)
})

app.post("/checkout_bold_button", async (req: Request, res: Response) => {
    console.log(req.body);
    const { plan, price } = req.body
    console.log(plan, price);

    const data = await fetch(`${API_URL}/payments/app-checkout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": BOLD_PAYMENT_BUTTON_API_KEY ?? "",
        },
        // body: JSON.stringify({
        //     "amount_type": "CLOSE",
        //     "amount": {
        //         "currency": DIVISA,
        //         "total_amount": price,
        //         "tip_amount": 0
        //     },
        //     "description": "Payment for " + plan,
        //     // "payment_methods": ["CREDIT_CARD", "PSE", "BOTON_BANCOLOMBIA", "NEQUI"]
        //     "payment_methods": ["PSE"]
        // })
        body: JSON.stringify({
            "amount": {
                "currency": DIVISA,
                "taxes": [
                    {
                        "type": "VAT",
                        "base": 10000,
                        "value": 1000
                    }
                ],
                "tip_amount": 0,
                "total_amount": price
            },
            "payment_method": "POS",
            "terminal_model": "N86",
            "terminal_serial": "N860W000000",
            "reference": "d9b10690-981d-494d-bcb0-66a1dacab51d",
            "user_email": "vendedor@comercio.com",
            "description": "Payment for " + plan,
        })
    })

    const response = await data.json()
    console.log(response)
    res.send(response)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});