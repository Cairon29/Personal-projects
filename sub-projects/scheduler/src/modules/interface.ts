import { UserRouter } from "./users/router.ts";
import { AuthRouter } from "./auth/router.ts";
import { EventRouter } from "./events/router.ts";
import { InvitationRouter } from "./invitations/router.ts";
import { LabelRouter } from "./labels/router.ts";

// import { NotificationRouter } from "./notifications/router.ts";

import { Router } from "express";

export const api = Router();

api.use("/users", UserRouter);
api.use("/auth", AuthRouter);
api.use("/events", EventRouter);
api.use("/invitations", InvitationRouter);
api.use("/labels", LabelRouter);

// api.use("/notifications", NotificationRouter);
