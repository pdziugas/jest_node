const { sumNestedArray } = require("./9");

describe("Task #9 sumNestedArray()", () => {
  it("should return a sum of 51", () => {
    let nestedArray = [10, 6, [4, 8], 3, [6, 5, [9]]];
    const result = sumNestedArray(nestedArray);
    const expected = 51;

    expect(result).toBe(expected);
  });
});
