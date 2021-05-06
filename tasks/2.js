// ES5
var listOfNumbersES5 = [1, 2, 3, 4, 5, 6];

function sumES5() {
  var sum = 0;
  for (var i = 0; i < listOfNumbersES5.length; i++) {
    sum = sum + listOfNumbersES5[i];
  }
  return sum;
}

console.log(sumES5()); // 21

// ES6
const listOfNumbersES6 = [1, 2, 3, 4, 5];

const sumES6 = (accumulator, currentVlaue) => accumulator + currentVlaue;

console.log(listOfNumbersES6.reduce(sumES6)); // 15

module.exports = {
  sumES5,
  sumES6,
};
