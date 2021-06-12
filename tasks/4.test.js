const { removeDuplicates, removeDuplicates2 } = require("./4");

describe("Task #4 removeDuplicates()", () => {
  it("should remove duplicates in an array", () => {
    const result = removeDuplicates(["one", "two", "three", "one", "four", "five", "six"]);
    const expected = ["one", "two", "three", "four", "five", "six"];

    expect(result).toEqual(expected);
  });

  it("should remove duplicates in an array", () => {
    const result = removeDuplicates([10, 10, 10]);
    const expected = [10];

    expect(result).toEqual(expected);
  });

  it("should remove duplicates in an array", () => {
    const result = removeDuplicates2([10, 10, 10]);
    const expected = [10];

    expect(result).toEqual(expected);
  });
});
