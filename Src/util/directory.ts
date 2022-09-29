import fs from "fs-extra";

export const checkDir = async (directory: string): Promise<void> => {
    try {
        await fs.ensureDir(directory, 1);
    } catch (err) {
        console.log(err);
    }
};
