import { Request, Response, NextFunction } from "express";
import { inputValidation } from "../util/validation";

export const validation = (req: Request, res: Response, next: NextFunction) => {
    if (
        inputValidation(req.query.imageName as string, "string") &&
        inputValidation(req.query.width as string, "number") &&
        inputValidation(req.query.height as string, "number")
    ) {
        next();
    } else {
        res.send("Wrong Input Feild");
    }
};
