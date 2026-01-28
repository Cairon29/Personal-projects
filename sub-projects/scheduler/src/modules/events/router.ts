import { EventController } from "./controller.ts";
import { Router } from "express";

export const EventRouter = Router()

EventRouter.get('/', EventController.getEvents)
EventRouter.post('/', EventController.createEvent)
// EventRouter.delete('/:id', EventController.deleteEvent)
// EventRouter.patch('/:id', EventController.modifyEvent)
