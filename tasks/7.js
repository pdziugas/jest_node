const sevenAte9 = (str) => {
  return str.replace(/79(?=7)/g, "7");
};

console.log(sevenAte9("797")); // 77
console.log(sevenAte9("7979779797979997777979797")); // 77777779997777777

module.exports = {
  sevenAte9,
};
