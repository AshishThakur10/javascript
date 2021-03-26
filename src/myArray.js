
function myArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log("even", array[i]);
    } else {
      console.log("odd", array[i]);
    }
  }
}
module.exports = myArray;  //for text use