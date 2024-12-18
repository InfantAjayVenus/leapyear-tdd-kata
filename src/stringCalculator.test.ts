import { describe, expect, it } from "vitest";
import { stringCalculator } from "./stringCalculator";

describe("stringCalculator should", () => {
    it("returns 0 when empty string is passed", () => {
        expect(stringCalculator("")).toBe(0);
    });

    it("should return the number of the value when a string of number is passed", () => {
        expect(stringCalculator("1")).toBe(1);
    });

    it("returns the sum of values when a string of comma separated numbers is passed", () => {
        expect(stringCalculator("1,2")).toBe(3);
        expect(stringCalculator("1,2,3,4,5")).toBe(15);
    });

    it("returns the sum of values when the separators are comma and newline", () => {
        expect(stringCalculator("1\n2")).toBe(3);
        expect(stringCalculator("1\n2,3")).toBe(6);
    });

    it("returns the sum of values when a custom separator is passed", () => {
        expect(stringCalculator("//;\n1;2")).toBe(3);
        expect(stringCalculator("//.\n1.2.3.4.5")).toBe(15);
    });

    it("throws error when a negative number is passed in the input string", () => {
        expect(() => {
            stringCalculator("-1");
        }).toThrowError("negatives not allowed: -1");

        expect(() => {
            stringCalculator("-1,2,-3,4");
        }).toThrowError("negatives not allowed: -1,-3");
    });
});
