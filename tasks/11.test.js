const { say } = require("./11");

describe("Task #11 say()", () => {
  it("should return a two strings joined together", () => {
    const result = say("Hello,")("it's me");
    const expected = "Hello, it's me";

    expect(result).toBe(expected);
  });
});
