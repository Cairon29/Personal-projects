import { Router } from "express";

export const NotificationRouter = Router()
    
NotificationRouter.get('/', (req, res) => {
    res.send({ message: 'Hello, notifications!' });
})
