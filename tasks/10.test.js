const { CalculatorES5, CalculatorES6 } = require("./10");

describe("Task #10", () => {
  describe("ES6 calculator", () => {
    it("sum of 5 and 9 should return 14", () => {
      let calculatorES6 = new CalculatorES6(0);
      let result = calculatorES6.add(5).add(9).value;
      const expected = 14;

      expect(result).toBe(expected);
    });

    it("Calculator + 5 * 2 + 20 / 3 should return 10", () => {
      let calculatorES6 = new CalculatorES6(0);
      let result = calculatorES6.add(5).multiply(2).add(20).divide(3).value;
      const expected = 10;

      expect(result).toBe(expected);
    });
  });
});
