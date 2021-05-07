let nestedArray = [10, 6, [4, 8], 3, [6, 5, [9]]];

const sumNestedArray = (arr) =>{
  // Infinity flattens array as many times as needed
  return nestedArray.flat(Infinity).reduce((accumulator, currentValue) => accumulator + currentValue);
}

module.exports = {
  sumNestedArray,
};
