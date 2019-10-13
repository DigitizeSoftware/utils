import {oneOf} from "./in-array";

export let REQUIRED_ERROR = "Missing required property ${propName}";
export let TYPE_MISMATCH = "Type mismatch: expected '${expectedType}', got '${gotType}'";

export function assertString(value: any, message: string) {
    if (typeof value !== "string") {
        throw new Error(message);
    }
}

export function assertOneOf(value: string, list: string, message: string) {
    if (!oneOf(value, list)) {
        throw new Error(message);
    }
}

export function assertDefined(value: any, message: string) {
    if (typeof value === "undefined") {
        throw new Error(message);
    }
}

export function assertType(typeDef: string, value: any) {
    const parsed = /^(\w+)(\?)?\s*:\s*(string)$/.exec(typeDef);
    if (!parsed) {
        throw new Error(`Unsupported type definition "${typeDef}"`);
    }

    const [propName, optional, type] = parsed;

    if (typeof value === "undefined" || value === null) {
        if (!optional) {
            throw new Error(REQUIRED_ERROR.replace(/\${propName}/g, propName));
        }
        else {
            // No need to further check type of null or undefined
            return;
        }
    }

    const gotType = typeof type;
    switch (type) {
        case "string":
            if (gotType !== "string") {
                throw new Error(TYPE_MISMATCH
                    .replace(/\${expectedType}/g, type)
                    .replace(/\${gotType}/, gotType))
            }
            break;
        default:
            throw new Error(`Validation for type ${type} is not supported`);
    }
}
