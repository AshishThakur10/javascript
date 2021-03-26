function myArray(numbers) {
  let odd = [];
  let even = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      // number is even
      even.push(numbers[i]);
    } else {
      // number is not even (=odd)
      odd.push(numbers[i]);
    }
  }

  // create an object with the odd and even array in it
  const returnObject = {
    odd,
    even,
  };

  return returnObject;
}
module.exports = myArray; 