const spy = () => {
  let count = 0;

  // wrapper function
  return function wrapper() {
    count++;
    wrapper.report = () => {
      return ({ totalCalls: count });
    };
  };
};

const spied = spy();
spied();
spied(1);
spied("hello");
let report = spied.report(); // returns { totalCalls: 3 }

module.exports = {
  spy,
};
