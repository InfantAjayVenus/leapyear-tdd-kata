import { describe, expect, it } from "vitest";
import { isLeapYear } from "./isLeapYear";

describe("isLeapYear", () => {
    it("should return false given a non-leap year", () => {
        expect(isLeapYear(2025)).toBeFalsy();
    });
});


