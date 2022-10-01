import { validation } from "./validatore";
import { validateImg } from "./ValidateImgName";
import { checkCachImage } from "./checkingCachedImage";

export const MIDDLEWARE_PATH = [validation, validateImg, checkCachImage];
