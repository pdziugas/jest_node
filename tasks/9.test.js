const { sumNestedArray } = require("./9");

describe("Task #9", () => {
  describe("sumNestedArray()", () => {
    it("should return a sum of 51", () => {
      const result = sumNestedArray();
      const expected = 51;

      expect(result).toBe(expected);
    });
  });
});
