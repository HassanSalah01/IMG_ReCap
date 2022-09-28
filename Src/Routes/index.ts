import express, { Request, Response } from "express";
import { validation } from "./../MiddleWare/validatore";
import { dirs } from "./../util/validation";
import { validateImg } from "./../MiddleWare/ValidateImgName";
const routes = express.Router();

routes.get(
    "/",
    validation,
    validateImg,
    (req: Request, res: Response): void => {
        console.log(dirs);
        // console.log(req.query.pName);
        res.send("WElcome From Api Root");
    }
);

export default routes;
