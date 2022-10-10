import sharp from "sharp";
import { thumbnailDir } from "../Paths/paths";
export const resizeImg = async (
    originPath: string,
    imageWidth: number,
    imageHeight: number,
    newPath: string
) => {
    await sharp(originPath)
        .resize({
            width: imageWidth,
            height: imageHeight,
        })
        .toFile(newPath);
};
