let arr = [10, 6, [4, 8], 3, [6, 5, [9]]];
// Infinity flattens array as many times as needed
const sumNestedArray = () =>
  arr.flat(Infinity).reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sumNestedArray());  // 51

module.exports = {
  sumNestedArray,
};
