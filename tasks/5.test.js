const { wordSearch } = require("./5");

describe("Task #5", () => {
  describe("wordSearch()", () => {
    it("should return true for searching case insensitive word", () => {
      const result = wordSearch();
      const expected = true;

      expect(result).toBe(expected);
    });
  });
});
