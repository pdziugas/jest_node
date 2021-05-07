const { wordSearch } = require("./5");

describe("Task #5 wordSearch()", () => {
  it("should return false for searching foo in foobar", () => {
    let string = "foobar";
    let word = "foo";
    const result = wordSearch(word, string);
    const expected = false;

    expect(result).toBe(expected);
  });

  it("should return true for searching foo in Foo bar", () => {
    let string = "Foo bar";
    let word = "foo";
    const result = wordSearch(word, string);
    const expected = true;

    expect(result).toBe(expected);
  });
});
