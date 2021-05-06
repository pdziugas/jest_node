const { sum } = require("./0");

// Suite
describe("Task #1", () => {
  describe("sum", () => {
    // Spec
    test("should 1 + 2 = 3", () => {
      // Setup

      // Execution
      const result = sum(1, 2);
      const expected = 3;

      // Assertion
      expect(result).toBe(expected);
    });
  });
});
