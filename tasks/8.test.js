const { spy } = require("./8");

describe("Task #8", () => {
  describe("spy()", () => {
    it("should return the count of totalCalls", () => {
      const spied = spy();
      spied();
      spied(1);
      spied("hello");

      let result = spied.report();
      const expected = { totalCalls: 3 };

      expect(result).toMatchObject(expected);
    });
  });
});
