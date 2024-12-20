import { describe, expect, it } from "vitest";
import { isLeapYear } from "./leapyear";

describe("isLeapYear", () => {
    it("should return false if year is not divisible by 4", () => {
        expect(isLeapYear(1997)).toBeFalsy();
    });

    it("should return true if year is divisible by 4", () => {
        expect(isLeapYear(1996)).toBeTruthy();
    });

    it("should return true if year is divisible by 400", () => {
        expect(isLeapYear(1600)).toBeTruthy();
    });

    it("should return false if year is divisible by 100 but not by 400", () => {
        expect(isLeapYear(1800)).toBeFalsy();
    });
});
