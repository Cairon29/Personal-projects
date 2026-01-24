import { Router } from "express";

export const EventRouter = Router()

EventRouter.get('/', (req, res) => {
    res.send({ message: 'Hello, events!' });
})
