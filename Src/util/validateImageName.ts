import fs from "fs";
import { sliceString } from "./utilityFunctions";

export const validateImageName = async (fileDir: string, picName: string) => {
    try {
        //
        const getAllNames = await fs.promises.readdir(fileDir);
        const IsThePicExist: string[] = getAllNames.filter((item: string) => {
            return sliceString(item, ".") == sliceString(picName, ".");
        });
        if (IsThePicExist.length >= 1) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error("Error occurred while reading directory!", err);
    }
};
