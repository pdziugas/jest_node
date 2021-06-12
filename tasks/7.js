const sevenAte9 = (str) => {
  return str.replace(/79(?=7)/g, "7");
};

module.exports = {
  sevenAte9,
};
