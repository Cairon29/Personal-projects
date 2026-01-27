import { Request } from "express";

// checkFields checks for required fields in a request body and returns an error if any are missing.
const checkReqFields = (req: Request, fields: string[]) => {
    for (const field of fields) {
        if (!req.body[field]) {
            return {
                error: `Missing required field: ${field}`,
                status: 400,
                success: false
            }
        }
    }
}

// checkOptionalFields checks for optional fields in a request body and adds them to a container object if they exist.
const checkFields = (req: Request, container: {}, optionals: string[]): {} => {
    for (const o of optionals) {
        if (req.body[o]) {
            (container as any)[o] = req.body[o];
        }
    }
    return container;
}

export { checkReqFields, checkFields }
