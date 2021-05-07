const sumNestedArray = (arr) =>{
  // Infinity flattens array as many times as needed
  return arr.flat(Infinity).reduce((accumulator, currentValue) => accumulator + currentValue);
}

module.exports = {
  sumNestedArray,
};
