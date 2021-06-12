const { mottoES5, mottoES6 } = require("./3");

describe("Task #3", () => {
  describe("mottoES5", () => {
    it("should return a string of 'Unbowed, Unbent, Unbroken'", () => {
      const result = mottoES5("Martell");
      const expected = "Unbowed, Unbent, Unbroken";

      expect(result).toBe(expected);
    });

    it("should return an empty string if name is not found", () => {
      const result = mottoES5("Martelll");
      const expected = "";

      expect(result).toBe(expected)
    })
  });

  describe("mottoES6", () => {
    it("should return a string of 'Our Blades Are Sharp'", () => {
      const result = mottoES6("Bolton");
      const expected = "Our Blades Are Sharp";

      expect(result).toBe(expected);
    });
    
    it("should return an empty string if name is not found", () => {
      const result = mottoES6("Bolto");
      const expected = "";

      expect(result).toBe(expected);
    });
  });
});
