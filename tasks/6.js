const add1 = (x) => {
  return function (y) {
    return x + y;
  };
};

// another way of doing this:
const add2 = (x) => (y) => x + y;

module.exports = {
  add1,
  add2,
};
