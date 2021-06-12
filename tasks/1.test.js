const { rangeES5, rangeES6 } = require("./1");

describe("Task #1", () => {
  describe("range ES5", () => {
    it("should return an array of [4-9]", () => {
      const result = rangeES5(4, 10);
      const expected = [4, 5, 6, 7, 8, 9];

      // Assertion
      expect(result).toStrictEqual(expected);
    });
  });

  describe("range ES6", () => {
    it("should return an array of [4-9]", () => {
      const result = rangeES6(4, 10);
      const expected = [4, 5, 6, 7, 8, 9];

      expect(result).toStrictEqual(expected);
    });
  });
});
