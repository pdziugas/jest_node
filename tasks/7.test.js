const { sevenAte9 } = require("./7");

describe("Task #7", () => {
  describe("sevenAte9()", () => {
    it("should remove 9 between two 7 (797 --> 77)", () => {
      const result = sevenAte9("797");
      const expected = "77";

      expect(result).toBe(expected);
    });
  });
});
