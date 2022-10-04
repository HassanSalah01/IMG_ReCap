import { sliceString } from "../../util/utilityFunctions";

describe("SliceString Function ", () => {
    it("return String After Slicing it", () => {
        expect(sliceString("jford.jpg", ".")).toMatch("jford");
    });
});
