const { add, subtract, multiply, divide, squareRoot, max } = require("./math");

describe("Testing various math functions", () => {
  test("Testing the addition funciton", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("Testing the subtract function", () => {
    expect(subtract(5, 1)).toBe(4);
  });

  test("Testing the multiplication function", () => {
    expect(multiply(5, 5)).toBe(25);
  });

  test("Testing the division function", () => {
    expect(divide(10, 5)).toBe(2);
  });

  test("Testing the square root function", () => {
    expect(squareRoot(10)).toBe(3);
  });

  test("Testing the max function", () => {
    expect(max(10, 10)).toBe(10);
  });
});
