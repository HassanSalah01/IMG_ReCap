import path from "path";
export const validateNumber = (input: string): boolean => {
    const inp = parseInt(input);
    return !isNaN(inp) && input != null && input != " " && input != undefined;
};

export const validateString = (input: string): boolean => {
    return input != null && input != " " && input != undefined;
};
export const inputValidation = (inp: string, type: string): boolean => {
    if (type == "number") {
        return validateNumber(inp);
    } else {
        return validateString(inp);
    }
};
