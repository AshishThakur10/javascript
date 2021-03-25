let array = [4, 6, 8, 9, 5];
function myArray() {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log("even", array[i]);
    } else {
      console.log("odd", array[i]);
    }
  }
}
myArray();
