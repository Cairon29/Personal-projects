import type { Request, Response } from "express";
import express from "express";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const DIVISA = 'USD'
const BOLD_TEST_API_KEY = 'x-api-key <aqui va la llave>'


app.use(express.json());
app.use(express.static(path.join(__dirname, "app")));

app.get("/api", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.post("/checkout", async (req: Request, res: Response) => {
    console.log(req.body);
    const { plan, price } = req.body
    console.log(plan, price);

    const data = await fetch("https://integrations.api.bold.co/payments/app-checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": BOLD_TEST_API_KEY,
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