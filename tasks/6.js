const add1 = (x) => {
  return function (y) {
    return x + y;
  };
};

// another way of doing this:
const add2 = (x) => (y) => x + y;

console.log(add1(1)(7)); // 8
console.log(add2(1)(5)); // 6

module.exports = {
  add1,
  add2,
};
