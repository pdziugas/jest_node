const array = ["one", "two", "three", "one", "four", "five", "six"];

const removeDuplicates = () => {
  return array.filter((a, b) => array.indexOf(a) === b);
};

console.log(removeDuplicates());

module.exports = {
  removeDuplicates,
};
