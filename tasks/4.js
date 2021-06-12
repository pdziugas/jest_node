const removeDuplicates = (array) => {
  const newArray = [];
  array.forEach((item) => {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

const removeDuplicates2 = (array) => {
  return [...new Set(array)];
}

module.exports = {
  removeDuplicates,
  removeDuplicates2,
};
