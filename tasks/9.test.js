const { sumNestedArray } = require("./9");

describe("Task #9 sumNestedArray()", () => {
  it("should return a sum of 51", () => {
    let nestedArray = [10, 6, [4, 8], 3, [6, 5, [9]]];
    const result = sumNestedArray(nestedArray);
    const expected = 51;

    expect(result).toBe(expected);
  });
  
  it("should return a sum of 1179.4", () => {
    let nestedArray = [660, 41.2, [4, 8], 3, [6, 5, [452.2]]];
    const result = sumNestedArray(nestedArray);
    const expected = 1179.4;

    expect(result).toBe(expected);
  });
});
