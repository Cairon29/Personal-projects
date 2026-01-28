import { Request, Response } from "express";
import { EventService } from "./service.ts";
import { checkReqFields, checkFields } from "../../utils/req_field_checker.ts";

import type { CreateEventData, Invitations, Labels } from "../../types/types.ts";

export class EventController {
    
    static getEvents = async (req: Request, res: Response) => {
        const result = await EventService.getEvents();
        res.status(result.status).send(result);
    }
    
    static createEvent = async (req: Request, res: Response) => {
        const fields = ['name', 'selected_date', 'created_by']
        const optionals = ['will_repeat', 'repeat_rate', 'selected_date', 'description', 'labels', 'invitations']

        const req_body = req.body;

        const check_result = checkReqFields(req_body, fields);
        if (check_result) {
            return res.status(check_result.status).send(check_result);
        }

        let data: CreateEventData = {
            name: req.body.name,
            selected_date: req.body.selected_date,
            created_by: req.body.created_by,
        }

        data = checkFields(req_body, data, optionals) as CreateEventData;  
        // @ts-ignore
        if (data.invitations) {
            const invitations_fields = ['user_id', 'invited_by', 'title', 'description', 'is_closed']
            data.invitations = checkFields(req_body, data.invitations, invitations_fields) as Invitations;
        }

        if (data.labels) {
            for (const label of data.labels) {
                if (typeof label !== 'number') {
                    return res.status(400).send({
                        error: `Label must be a number`,
                        status: 400,
                        success: false
                    });
                }
            }
        }

        const result = await EventService.createEvent(data);
        res.status(result.status).send(result);

    }
}
     

