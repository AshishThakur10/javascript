const myArray = require("./myArray.js");

describe("Check if the even and odd num", () => {
  const array = [4, 6, 8, 9, 5];
  expect(myArray(array)).toBe(array);
});
