// ES5
var listOfNumbersES5 = [1, 2, 3, 4, 5, 6];

function sumES5(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

// ES6
const sumES6 = (accumulator, currentValue) => accumulator + currentValue;

module.exports = {
  sumES5,
  sumES6,
};
