// checkFields checks for required fields in a request body and returns an error if any are missing.
const checkReqFields = (req: {}, fields: string[]) => {
    
    if (!req || typeof req !== 'object') {
        return {
            error: `Invalid request body`,
            status: 400,
            success: false
        };
    }
    
    
    for (const field of fields) {
        if (!(req as any)[field]) {
            return {
                error: `Missing required field: ${field}`,
                status: 400,
                success: false
            }
        }
    }
}

// checkOptionalFields checks for optional fields in a request body and adds them to a container object if they exist.
const checkFields = (req: {}, container: {}, optionals: string[]): {} => {
    for (const o of optionals) {
        if ((req as any)[o]) {
            (container as any)[o] = (req as any)[o];
        }
    }
    return container;
}

export { checkReqFields, checkFields }
