const { sumES5, sumES6 } = require("./2");

describe("Task #2", () => {
  describe("sum ES5", () => {
    it("should return a sum of 21", () => {
      const result = sumES5();
      const expected = 21;

      expect(result).toBe(expected);
    });
  });

  describe("sum ES6", () => {
    it("should return a sum of 15", () => {
      const listOfNumbersES6 = [1, 2, 3, 4, 5];

      const result = listOfNumbersES6.reduce(sumES6);
      const expected = 15;

      expect(result).toBe(expected);
    });
  });
});
