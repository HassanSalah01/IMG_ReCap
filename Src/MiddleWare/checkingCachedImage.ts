import { Request, Response, NextFunction } from "express";
import { thumbnailDir } from "../Paths/paths";
import { checkDir } from "../util/directory";
import { validateImageName } from "../util/validateImageName";

export const checkCachImage = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await checkDir(thumbnailDir);
        const fullImageName = `${req.query.imageName}_${req.query.width}_${req.query.height}`;
        const cachedImage = await validateImageName(
            thumbnailDir,
            fullImageName
        );
        if (cachedImage) {
            console.log("image is cached");
            next();
        } else {
            console.log("not cached ");
            res.send("not cached");
        }
    } catch (error) {
        console.log(error);
    }
};
