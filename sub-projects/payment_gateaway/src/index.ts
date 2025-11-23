import type { Request, Response } from "express";
import express from "express";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "app")));

app.get("/api", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.post("/checkout", (req: Request, res: Response) => {
    console.log(req.body);
    const { plan, price } = req.body
    console.log(plan, price);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});