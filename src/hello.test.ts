import { describe, expect, it } from "vitest";
import { getHelloWorld } from "./hello";

describe("hello world", () => {
    it("should return 'hello world'", () => {
        expect(getHelloWorld()).toBe("Hello World");
    });
});


