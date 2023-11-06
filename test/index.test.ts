import { allGuter, singleKnock } from "../src/index";

describe("test guter function", () => {
    it("should return 0", () => {
        expect(allGuter()).toBe(0);
    });
});

describe("test single score function", () => {
    it("should return 20", () => {
       // let score = new Array(20).fill(0);
        expect(singleKnock()).toBe(20);
    });
});