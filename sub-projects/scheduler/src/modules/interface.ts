import { UserRouter } from "./users/router.ts";
import { AuthRouter } from "./auth/router.ts";
// import { EventRouter } from "./events/router.ts";
// import { NotificationRouter } from "./notifications/router.ts";

import { Router } from "express";

export const api = Router();

api.use("/users", UserRouter);
api.use("/auth", AuthRouter);
// api.use("/events", EventRouter);
// api.use("/notifications", NotificationRouter);
