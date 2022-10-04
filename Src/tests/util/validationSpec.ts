import {
    validateNumber,
    validateString,
    inputValidation,
} from "../../util/validation";

describe("ValidateNumber Function ", () => {
    it("Should Return True If It is a number", () => {
        expect(validateNumber("100")).toBeTruthy;
    });
    it("Should Return Fasle Sending a Non String Number", () => {
        expect(validateNumber("mark")).toBeTruthy;
    });
});
describe("ValidateString Function", () => {
    it("Should Return True Cause String Is valid", () => {
        const a = "100";
        expect(validateString(a)).toBeTruthy;
    });
    it("Should Return False Cause String Is Not Valid", () => {
        const a = "111";
        expect(validateString(a)).toBeFalsy;
    });
});
describe("InputValidation Function", () => {
    it("Should Return True Because String Is valid", () => {
        expect(inputValidation("test", "string")).toBeTruthy;
    });
    it("should Return False Because Input Is wrong", () => {
        expect(inputValidation("sos", "number")).toBeFalsy;
    });
});
