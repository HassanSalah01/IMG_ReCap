import { Request, Response, NextFunction } from "express";
import { validateImageName } from "./../util/validateImageName";
import { imageRoot } from "../Paths/paths";
export const validateImg = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const isImageLocated = await validateImageName(
        imageRoot,
        req.query.imageName as string
    );
    if (isImageLocated) {
        next();
    } else {
        res.send("fuck off");
    }
};
