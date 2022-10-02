import { Request, Response, NextFunction } from "express";
import { writeLogs, LogNum } from "../util/WriteLogs";
import { rootDir } from "../Paths/paths";

export const data = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entery = new LogNum();
        console.log(Object.keys(req.params).length);
        // eslint-disable-next-line prettier/prettier
        const datas = `${entery.getLogNumb()}  ${new Date().getTime()} ${
            req.hostname
        } ${JSON.stringify(req.query)} ${req.ip} \n`;
        writeLogs(`${rootDir}/logs2.txt`, datas);
        next();
    } catch (error) {
        console.log("WRITE FILE ERROR");
    }
};
