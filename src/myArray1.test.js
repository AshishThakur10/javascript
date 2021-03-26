const myArray1 = require("./myArray1.js");

test('Check if the even and odd num', 
() => {
  const array = [4, 6, 8, 9, 5];
  expect(myArray1(array)).toMatchObject( {"even": [4, 6, 8], "odd": [9, 5]});
});
