// a) Not using ES6 methods
function rangeES5(x, y) {
  var list = [];
  for (var i = x; i < y; i++) {
    list.push(i);
  }

  return list;
}

// b) Using ES6
const rangeES6 = (x, y) => {
  return Array(y - x + 1)
    .fill()
    .map((_, idx) => x + idx)
    .slice(0, -1);
};

module.exports = {
  rangeES5,
  rangeES6,
};
