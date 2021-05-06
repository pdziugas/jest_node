// a) Not using ES6 methods
function rangeES5(x, y) {
  var list = [];
  for (var i = x; i < y; i++) {
    list.push(i);
  }

  return list;
}

console.log(rangeES5(4, 10)); // returns [ 4, 5, 6, 7, 8, 9 ]

// b) Using ES6
const rangeES6 = (x, y) => {
  return Array(y - x + 1)
    .fill()
    .map((_, idx) => x + idx)
    .slice(0, -1);
};

console.log(rangeES6(4, 10)); // returns [ 4, 5, 6, 7, 8, 9 ]

module.exports = {
  rangeES5,
  rangeES6,
};
