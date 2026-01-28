import { Request, Response } from "express";
import { LabelService } from "./service";

export class LabelController {
    static async getLabels(req: Request, res: Response) {
        const { status, success, data } = await LabelService.getLabels();
        res.status(status).send({ success, data });
    }
}
