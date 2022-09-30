import fs from "fs";

export const writeLogs = async (path: string, data: string) => {
    console.log("logsssss write");
    await fs.promises.appendFile(path, data);
};
export class LogNum {
    static logNumb = 0;
    constructor() {
        LogNum.logNumb++;
    }
    getLogNumb() {
        return LogNum.logNumb;
    }
}
