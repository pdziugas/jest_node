const { removeDuplicates } = require("./4");

describe("Task #4", () => {
  describe("removeDuplicates()", () => {
    it("should remove duplicates in an array", () => {
      const array = ["one", "two", "three", "one", "four", "five", "six"];
      const result = removeDuplicates(array);
      const expected = ["one", "two", "three", "four", "five", "six"];

      expect(result).toStrictEqual(expected);
    });
  });
});
