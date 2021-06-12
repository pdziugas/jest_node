const { add1, add2 } = require("./6");

describe("Task #6 add()", () => {
  it("add1 should return a sum of two numbers and return 8", () => {
    const result = add1(1)(7);
    const expected = 8;

    expect(result).toBe(expected);
  });

  it("add2 should return a sum of two numbers and return 6", () => {
    const result = add2(1)(5);
    const expected = 6;

    expect(result).toBe(expected);
  });
});
