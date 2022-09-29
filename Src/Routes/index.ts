import express, { Request, Response } from "express";
import { MIDDLEWARE_PATH } from "../MiddleWare/middlewareFullRoute";
const routes = express.Router();

routes.get("/", MIDDLEWARE_PATH, (req: Request, res: Response): void => {
    // console.log(req.query.pName);
    res.send("WElcome From Api Root");
});

export default routes;
