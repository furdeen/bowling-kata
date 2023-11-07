//test bowilng kata 
//all zero score

import { allGuter, allSingleScore, calcScore, rollsScore} from "../src/index";

describe("test allGuter function", () => {
it("should return 0 for allGuter()", () => {
expect(allGuter()).toBe(0);
});
})
describe("test allSingleScore function", () => {
    it("should return 20 for allsingleScore()", () => {
    expect(allSingleScore()).toBe(20); });
    });

    describe("test calcScore function", () => {
        it("should return 18 for calcScore()", () => {
        expect(calcScore(rollsScore())).toBe(18); });
        });